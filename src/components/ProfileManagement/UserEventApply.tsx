import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { eventQuery } from "../../api/eventApi";
import { userEventAdd } from "../../api/userEventApi";
import {
  UserEventApplyButton,
  UserEventApplyContextDiv,
  UserEventApplyDiv,
  UserEventAttendedDiv,
  UserEventCardBottomDiv,
  UserEventCardButtonDiv,
  UserEventCardDiv,
  UserEventCardTopDiv,
  UserEventCardTopLeftDiv,
  UserEventCardTopRightDiv,
} from "../../cssJs/profileManagementCss";
import { Loading } from "../../cssJs/publicCss";
import { ifUserExist } from "../../helperFns/eventFn";
import { getTimeString } from "../../helperFns/timeFn";
import { AlertBody } from "../../types/BasicType";
import { BooleanType } from "../../types/EnumTypes";
import { EventType, UserEventType } from "../../types/EventType";
import { IStoreState } from "../../types/IStoreState";
import { User } from "../../types/User";
import { getAlert } from "../AlertBody";

const UserEventApply = (): JSX.Element => {
  const loginUser: User | null = useSelector(
    (state: IStoreState) => state.loginUserState
  );

  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<EventType[] | null>([]);
  const [alert, setAlert] = useState<AlertBody>({
    type: BooleanType.INI,
    context: "",
  });

  useEffect(() => {
    (async function anyNameFunction() {
      await getEvents(page, pageSize);
    })();
  }, [page]);

  const getEvents = async (page: number, pageSize: number) => {
    setLoading(true);
    //get all plate
    const events: EventType[] | null = await eventQuery(page, pageSize);
    console.log(events);
    setEvents(events);
    setLoading(false);
  };

  const addUserEvent = async (eventId: string) => {
    const eventBody: UserEventType = {
      _id: loginUser?.userEmail + eventId,
      userId: loginUser?.userEmail as string,
      eventId: eventId,
      hours: 0,
    };
    setLoading(true);
    await userEventAdd(eventBody);
    setLoading(false);
  };

  const getApplyButton = (event: EventType) => {
    const exist = ifUserExist(event.users, loginUser?._id);
    if (!exist) {
      return (
        <UserEventApplyButton onClick={() => addUserEvent(event._id)}>
          Apply
        </UserEventApplyButton>
      );
    } else {
      return (
        <UserEventAttendedDiv>
          <p>Attended</p>
        </UserEventAttendedDiv>
      );
    }
  };

  const getBody = (events: EventType[]) => {
    if (loading) {
      return <Loading />;
    } else {
      return events.map((event, index) => {
        return (
          <UserEventCardDiv key={index}>
            <UserEventCardTopDiv>
              <UserEventCardTopLeftDiv>
                <h6>Name:</h6>
                {event.name}
              </UserEventCardTopLeftDiv>
              <UserEventCardTopRightDiv>
                <h6>Time:</h6>
                {getTimeString(event.time)}
              </UserEventCardTopRightDiv>
            </UserEventCardTopDiv>
            <UserEventCardBottomDiv>
              <h6>Introduction:</h6>
              {event.introduction.substring(0, 10)}......
            </UserEventCardBottomDiv>
            <UserEventCardButtonDiv>
              {getApplyButton(event)}
            </UserEventCardButtonDiv>
          </UserEventCardDiv>
        );
      });
    }
  };

  return (
    <UserEventApplyDiv>
      <p>{getAlert(alert)}</p>
      <UserEventApplyContextDiv>
        {events == null ? "" : getBody(events)}
      </UserEventApplyContextDiv>
    </UserEventApplyDiv>
  );
};

export default UserEventApply;
