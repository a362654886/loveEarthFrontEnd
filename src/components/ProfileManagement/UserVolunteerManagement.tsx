import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userGetEventQuery, userVolunteerUpdate } from "../../api/userApi";
import {
  UserVolunteerButton,
  UserVolunteerDiv,
  UserVolunteerManagementDiv,
  UserVolunteerShow,
  UserVolunteerShowContext,
} from "../../cssJs/profileManagementCss";
import { Loading } from "../../cssJs/publicCss";
import { AlertBody } from "../../types/BasicType";
import { BooleanType } from "../../types/EnumTypes";
import { IStoreState } from "../../types/IStoreState";
import { User, VolunteerType } from "../../types/User";
import { getAlert } from "../AlertBody";

const UserVolunteerManagement = (): JSX.Element => {
  const pageSize = 10;

  const loginUser: User | null = useSelector(
    (state: IStoreState) => state.loginUserState
  );

  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [user, setUsers] = useState<User | null>(null);
  const [alert, setAlert] = useState<AlertBody>({
    type: BooleanType.INI,
    context: "",
  });

  useEffect(() => {
    (async function anyNameFunction() {
      await getUsers(page, pageSize);
    })();
  }, [page]);

  useEffect(() => {
    //console.log(user);
  }, [update]);

  const updateVolunteer = async (volunteer: VolunteerType) => {
    const updateResult = await userVolunteerUpdate(
      loginUser?.userEmail as string,
      volunteer
    );
    if (updateResult == "success") {
      setAlert({
        type: BooleanType.SUCCESS,
        context: "Success",
      });
    } else {
      setAlert({
        type: BooleanType.FAIL,
        context: "update wrong",
      });
    }
  };

  const getUsers = async (page: number, pageSize: number) => {
    console.log("s")
    setLoading(true);
    //get all plate
    const users: User[] | null = await userGetEventQuery(
      loginUser?._id as string,
      page,
      pageSize
    );
    if (users) {
      setUsers(users[0]);
    }
    setLoading(false);
    const n = update + 1;
    setUpdate(n);
  };

  const getBody = () => {
    switch (loginUser?.volunteer) {
      case VolunteerType.false:
        return (
          <>
            <p>You are not volunteer, do you want to apply?</p>
            <UserVolunteerButton
              onClick={() => updateVolunteer(VolunteerType.apply)}
            >
              Apply
            </UserVolunteerButton>
          </>
        );
      case VolunteerType.apply:
        return (
          <>
            <p>Your application is checking</p>
          </>
        );
      case VolunteerType.true:
        if (user) {
          const u = user;
          return ((user as User).events as any[]).map((event, index) => {
            return (
              <UserVolunteerShow key={index}>
                <UserVolunteerShowContext>
                  <h6>Name:</h6>
                  <p>{event[0].name}</p>
                </UserVolunteerShowContext>
                <UserVolunteerShowContext>
                  <h6>Introduction:</h6>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        {event[0].introduction}
                      </Tooltip>
                    }
                  >
                    <p>{event[0].introduction.substring(0, 10)}......</p>
                  </OverlayTrigger>
                </UserVolunteerShowContext>
                <UserVolunteerShowContext>
                  <h6>Time:</h6>
                  <p>{event[0].time}</p>
                </UserVolunteerShowContext>
                <UserVolunteerShowContext>
                  <h6>Hours:</h6>
                  <p>{(u as any).hours[index]}</p>
                </UserVolunteerShowContext>
              </UserVolunteerShow>
            );
          });
        } else {
          return <Loading />;
        }
    }
  };

  return (
    <UserVolunteerManagementDiv>
      <p>{getAlert(alert)}</p>
      <UserVolunteerDiv>{getBody()}</UserVolunteerDiv>
    </UserVolunteerManagementDiv>
  );
};

export default UserVolunteerManagement;
