import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userUpdate } from "../../api/userApi";
import {
  EditButton,
  UserEditShowDiv,
  UserInfoManagementDiv,
  UserInfoShowDiv,
} from "../../cssJs/profileManagementCss";
import { ButtonDiv, ButtonPrimary } from "../../cssJs/publicCss";
import { getMomentDate, getTimeString } from "../../helperFns/timeFn";
import { AlertBody } from "../../types/BasicType";
import { BooleanType, InputBoxType } from "../../types/EnumTypes";
import { IStoreState } from "../../types/IStoreState";
import { User, VolunteerType } from "../../types/User";
import { getAlert } from "../AlertBody";
import InputBox from "../InputBox";
import LabelBox from "../LabelBox";

const UserInfoManagement = (): JSX.Element => {
  const loginUser: User | null = useSelector(
    (state: IStoreState) => state.loginUserState
  );

  const [showEdit, setShowEdit] = useState(false);
  const [userEmail, setUserEmail] = useState(loginUser?.userEmail);
  const [firstName, setUserFirstName] = useState(loginUser?.firstName);
  const [lastName, setUserLastName] = useState(loginUser?.lastName);
  const [address, setUserAddress] = useState(loginUser?.address);
  const [birthday, setUserBirthday] = useState(loginUser?.birthday);
  const [password, setUserPassword] = useState(loginUser?.password);
  const [alert, setAlert] = useState<AlertBody>({
    type: BooleanType.INI,
    context: "",
  });

  useEffect(() => {
    //
  });

  const onChange = (e: React.ChangeEvent<Element>): void => {
    const type = (e.target as HTMLInputElement).placeholder;
    switch (type) {
      case "User Email":
        setUserEmail((e.target as HTMLInputElement).value);
        break;
      case "First Name":
        setUserFirstName((e.target as HTMLInputElement).value);
        break;
      case "Last Name":
        setUserLastName((e.target as HTMLInputElement).value);
        break;
      case "Address":
        setUserAddress((e.target as HTMLInputElement).value);
        break;
      case "Password":
        setUserPassword((e.target as HTMLInputElement).value);
        break;
    }
  };

  const onTimeChange = (e: any) => setUserBirthday(new Date(e._d));

  const save = async () => {
    const updateUser: User = {
      _id: userEmail as string,
      userEmail: userEmail as string,
      firstName: firstName as string,
      lastName: lastName as string,
      address: address as string,
      birthday: birthday as Date,
      password: password as string,
      admin: loginUser?.admin as boolean,
      volunteer: loginUser?.volunteer as VolunteerType
    };
    const updateResult = await userUpdate(updateUser);
    if (updateResult == "success") {
      setAlert({
        type: BooleanType.SUCCESS,
        context: "Success",
      });
      setShowEdit(false)
    } else {
      setAlert({
        type: BooleanType.FAIL,
        context: "update wrong",
      });
    }
  };

  const getBody = () => {
    if (showEdit) {
      return (
        <UserEditShowDiv>
          <EditButton
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          >
            Back
          </EditButton>
          <InputBox
            Title="User Email"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={userEmail}
          />
          <InputBox
            Title="First Name"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={firstName}
          />
          <InputBox
            Title="Last Name"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={lastName}
          />
          <InputBox
            Title="Address"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={address}
          />
          <InputBox
            Title="Birthday"
            onChange={onTimeChange}
            type={InputBoxType.DATE_PICKER}
            date={getMomentDate(birthday ? birthday : new Date())}
          />
          <InputBox
            Title="Password"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={password}
          />
          <ButtonDiv>
            <ButtonPrimary onClick={save}>Save</ButtonPrimary>
          </ButtonDiv>
        </UserEditShowDiv>
      );
    } else {
      return (
        <UserInfoShowDiv>
          <EditButton
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          >
            Edit
          </EditButton>
          <LabelBox Title="UserEmail" Context={userEmail ? userEmail : ""} />
          <LabelBox Title="First Name" Context={firstName ? firstName : ""} />
          <LabelBox Title="Last Name" Context={lastName ? lastName : ""} />
          <LabelBox Title="Address" Context={address ? address : ""} />
          <LabelBox
            Title="Birthday"
            Context={birthday ? getTimeString(birthday) : ""}
          />
          <LabelBox Title="Password" Context={password ? password : ""} />
        </UserInfoShowDiv>
      );
    }
  };

  return (
    <UserInfoManagementDiv>
      <p>{getAlert(alert)}</p>
      {getBody()}
    </UserInfoManagementDiv>
  );
};

export default UserInfoManagement;
