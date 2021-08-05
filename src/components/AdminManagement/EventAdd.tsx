import * as React from "react";
import { useState } from "react";
import { eventAdd } from "../../api/eventApi";
import { getAlert } from "../../components/AlertBody";
import InputBox from "../../components/InputBox";
import { EventAddDiv } from "../../cssJs/adminManagementCss";
import { ButtonDiv, ButtonPrimary, Title } from "../../cssJs/publicCss";
import { AlertBody } from "../../types/BasicType";
import { BooleanType, InputBoxType } from "../../types/EnumTypes";
import { EventType } from "../../types/EventType";

const EventAdd = (): JSX.Element => {
  const [name, setEventName] = useState("");
  const [introduction, setEventIntroduction] = useState("");
  const [time, setEventTime] = useState(new Date("1900-01-01"));
  const [alert, setAlert] = useState<AlertBody>({
    type: BooleanType.INI,
    context: "",
  });

  const onChange = (e: React.ChangeEvent<Element>): void => {
    const type = (e.target as HTMLInputElement).placeholder;
    switch (type) {
      case "Event Name":
        setEventName((e.target as HTMLInputElement).value);
        break;
      case "Introduction":
        setEventIntroduction((e.target as HTMLInputElement).value);
        break;
    }
  };

  const onTimeChange = (e: any) => setEventTime(new Date(e._d));

  const submit = async () => {
    const newEvent: EventType = {
      _id: name + time.valueOf(),
      name: name,
      time: time,
      introduction: introduction,
    };
    const result = await eventAdd(newEvent);
    if (result) {
      setAlert({
        type: BooleanType.SUCCESS,
        context: "Success",
      });
    } else {
      setAlert({
        type: BooleanType.FAIL,
        context: "duplicate event, this event already exist in system",
      });
    }
  };

  return (
    <EventAddDiv>
      <Title>Event Add:</Title>
      <p>{getAlert(alert)}</p>
      <InputBox
        Title="Event Name"
        onChange={onChange}
        type={InputBoxType.INPUT}
        value={name}
      />
      <InputBox
        Title="Introduction"
        onChange={onChange}
        type={InputBoxType.INPUT}
        value={introduction}
      />
      <InputBox
        Title="Time"
        onChange={onTimeChange}
        type={InputBoxType.DATE_PICKER}
      />
      <ButtonDiv>
        <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
      </ButtonDiv>
    </EventAddDiv>
  );
};

export default EventAdd;
