import * as React from "react";
import { useEffect, useState, useImperativeHandle } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import {
  EventIntroduceDiv,
  EventLineDiv,
  EventLineElementDiv,
  EventShowDiv,
  EventUserDiv,
  EventVolunteerDiv,
} from "../../cssJs/adminManagementCss";
import { DetailButton, EventEditButton } from "../../cssJs/userTableCss";
import { EventType } from "../../types/EventType";
import { User } from "../../types/User";
import { Input } from "antd";
import { userEventUpdate } from "../../api/userEventApi";
import { getTimeString } from "../../helperFns/timeFn";

const PoPup = styled(Modal)`
  .modal-dialog {
    height: 700px;
    width: 1200px;
    margin: 1rem;
  }
  .modal-content {
    height: 500px;
    width: 1200px;
    border-radius: 30px;
    top: 50%;
    margin: -160px 0 0 0;
    background-color: #fdfff4;
  }
  .modal-header {
    background-color: #e4f1d0;
    border-radius: 30px 30px 0 0;
    color: black;
  }
`;

const InputBody = styled(Input)`
  height: 25px;
  width: 100px;
  border-radius: 20px 20px;
  margin-left: 30px;
`;

interface IProps {
  childRef: React.RefObject<{ popUp: () => void }>;
  propEvent: EventType | null;
}

const EventShowModel = ({ childRef, propEvent }: IProps): JSX.Element => {
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState<EventType | null>(null);
  const [update, setUpdate] = useState(0);
  const [saveHour, setSaveHour] = useState<string>("0");
  const [allHours, setAllHours] = useState<number[]>([0]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (propEvent?.users) {
      const editUsers = (propEvent?.users as User[][]).map((user, index) => {
        if (user[0]) {
          user[0].editHour = false;
        }
        return user;
      });
      propEvent.users = editUsers;
      setEvent(propEvent);
      setAllHours(propEvent.hours as number[]);
    }
  }, [propEvent]);

  useEffect(() => {
    //console.log(allHours);
  }, [update]);

  useEffect(() => {
    //console.log(allHours);
  }, [allHours]);

  useImperativeHandle(childRef, () => ({
    popUp: () => handleShow(),
  }));

  const getUsersTable = (userArr: User[][]) => {
    if (userArr[0][0] != undefined) {
      return userArr.map((users, index) => {
        return (
          <EventUserDiv key={index}>
            <div>
              <h6>Name: </h6>
              <p>
                {users[0] ? users[0].firstName : ""},
                {users[0] ? users[0].lastName : ""}
              </p>
            </div>
            <div>
              <h6>Email: </h6>
              <p>{users[0] ? users[0].userEmail : ""}</p>
            </div>
            <div>
              <h6>Hours: </h6>
              <p>{allHours ? allHours[0] : 0}</p>
              {getButton(users[0], index)}
            </div>
          </EventUserDiv>
        );
      });
    } else {
      return <p>no volunteers</p>;
    }
  };

  const onChange = (e: React.ChangeEvent<Element>): void =>
    setSaveHour((e.target as HTMLInputElement).value);

  const getButton = (user: User, index: number) => {
    if (user && user.editHour) {
      return (
        <>
          <InputBody onChange={onChange} value={saveHour} />
          <EventEditButton onClick={() => saveHoursShow(user, index, false)}>
            Save
          </EventEditButton>
          <EventEditButton onClick={() => editHoursShow(user, index, false)}>
            Back
          </EventEditButton>
        </>
      );
    } else {
      return (
        <EventEditButton onClick={() => editHoursShow(user, index, true)}>
          Edit
        </EventEditButton>
      );
    }
  };

  const editHoursShow = (user: User, index: number, value: boolean) => {
    user.editHour = value;
    const newUser = user;
    const newEvent: EventType = event as EventType;
    if (newEvent.users) {
      newEvent.users[index][0] = newUser;
    }
    setEvent(newEvent);
    setUpdate(update + 1);
  };

  const saveHoursShow = async (user: User, index: number, value: boolean) => {
    editHoursShow(user, index, value);
    //save hours
    const eventId = (event as EventType)._id;
    const hour = +saveHour;
    if (!isNaN(hour)) {
      await userEventUpdate({
        _id: "",
        userId: ((event as EventType).users as User[][])[index][0]._id,
        eventId: (event as EventType)._id,
        hours: hour,
      });
      //change hours
      const newEvent = event;
      ((newEvent as EventType).hours as number[])[index] = hour;
      setEvent(newEvent);
      const newHours = new Array<number>();
      ((newEvent as EventType).hours as number[]).forEach((number) => {
        newHours.push(number);
      });
      setAllHours(newHours);
      setUpdate(update + 1);
    }
  };

  const getVolunteerLength = (users: User[][]) => {
    if (users[0][0] != undefined) {
      return users.length;
    } else {
      return 0;
    }
  };

  return (
    <>
      <PoPup show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventShowDiv>
            <EventLineDiv>
              <EventLineElementDiv>
                <h6>Name:</h6>
                {event == null ? "" : event.name}
              </EventLineElementDiv>
              <EventLineElementDiv>
                <h6>Time:</h6>
                {event == null ? "" : getTimeString(event.time)}
              </EventLineElementDiv>
            </EventLineDiv>
            <EventIntroduceDiv>
              <h6>Introduction:</h6>
              <p>{event == null ? "" : event.introduction}</p>
            </EventIntroduceDiv>
            <h6>
              Volunteers:{" "}
              {event ? getVolunteerLength(event.users as User[][]) : 0}
            </h6>
            <EventVolunteerDiv>
              <div>
                {event == null ? "" : getUsersTable(event.users as User[][])}
              </div>
            </EventVolunteerDiv>
          </EventShowDiv>
        </Modal.Body>
      </PoPup>
    </>
  );
};

export default EventShowModel;
