import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userAdd } from "../api/userApi";
import { getAlert } from "../components/AlertBody";
import InputBox from "../components/InputBox";
import { ButtonDiv, ButtonPrimary, Title } from "../cssJs/publicCss";
import { SignUpDiv } from "../cssJs/signupCss";
import { AlertBody } from "../types/BasicType";
import { BooleanType, InputBoxType } from "../types/EnumTypes";
import { User, VolunteerType } from "../types/User";

const SignUpPage = (): JSX.Element => {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [firstName, setUserFirstName] = useState("");
  const [lastName, setUserLastName] = useState("");
  const [address, setUserAddress] = useState("");
  const [birthday, setUserBirthday] = useState(new Date("1900-01-01"));
  const [password, setUserPassword] = useState("");
  const [alert, setAlert] = useState<AlertBody>({
    type: BooleanType.INI,
    context: "",
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

  const submit = async () => {
    const newUser: User = {
      _id: userEmail,
      userEmail: userEmail,
      firstName: firstName,
      lastName: lastName,
      address: address,
      birthday: birthday,
      password: password,
      admin: false,
      volunteer: VolunteerType.false
    };
    const result = await userAdd(newUser);
    if (result) {
      setAlert({
        type: BooleanType.SUCCESS,
        context: "Success",
      });
      history.push({
        pathname: `/mainPage`
      });
    } else {
      setAlert({
        type: BooleanType.FAIL,
        context: "duplicate email, this email already exist in system",
      });
    }
  };

  const onTimeChange = (e: any) => setUserBirthday(new Date(e._d));

  return (
    <SignUpDiv>
      <Title>Register:</Title>
      <p>{getAlert(alert)}</p>
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
      />
      <InputBox
        Title="Password"
        onChange={onChange}
        type={InputBoxType.INPUT}
        value={password}
      />
      <ButtonDiv>
        <ButtonPrimary onClick={submit}>Sign Up</ButtonPrimary>
      </ButtonDiv>
    </SignUpDiv>
  );
};

export default SignUpPage;
