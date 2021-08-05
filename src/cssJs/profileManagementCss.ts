import Sider from "antd/lib/layout/Sider";
import { Button } from "react-bootstrap";
import styled from "styled-components";

//menu
export const ProfileManagementDiv = styled.div`
  height: auto;
  min-height: 500px;
  width: 100%;
  margin: 1rem;
  background-color: white;
  position: relative;
  display: flex;
`;

export const SideMenu = styled(Sider)`
  background-color: #e4f1d0;
  width: 300px;
  max-width: 300px;
  height: auto;
  min-height: 500px;
  .ant-menu {
    background-color: #e4f1d0;
    color: black;
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    color: black;
  }
  .ant-menu-item-selected {
    color: black;
  }
`;

//UserInfo Management

export const UserInfoManagementDiv = styled.div`
  background-color: #fdfff4;
  width: 100%;
`;

export const UserInfoShowDiv = styled.div`
  width: 70%;
  margin: 2rem auto;
  position: relative;
  div {
    width: 80%;
  }
`;

export const UserEditShowDiv = styled.div`
  width: 70%;
  margin: 2rem auto;
  position: relative;
  div {
    width: 80%;
  }
`;

export const EditButton = styled(Button)`
  height: 25px;
  width: 80px;
  border-radius: 12px 12px 12px 12px;
  padding: 0;
  line-height: 25px;
  margin: 0;
  color: white;
  position: absolute;
  right: 5px;
`;

//UserVolunteer Management

export const UserVolunteerManagementDiv = styled.div`
  background-color: #fdfff4;
  width: 100%;
`;

export const UserVolunteerDiv = styled.div`
  width: 70%;
  margin: 2rem auto;
  position: relative;
  div {
    width: 80%;
  }
`;

export const UserVolunteerButton = styled(Button)`
  background-color: #6d6d6d;
  height: 30px;
  width: 150px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px;
  line-height: 22px;
  margin: 0px;
  color: white;
`;

export const UserVolunteerShow = styled.div`
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
`;

export const UserVolunteerShowContext = styled.div`
  display: flex;
  h6 {
    width: 30%;
  }
  p {
    width: 70%;
  }
`;

//User Event

export const UserEventApplyDiv = styled.div`
  background-color: #fdfff4;
  width: 100%;
`;

export const UserEventApplyContextDiv = styled.div`
  width: 70%;
  margin: 2rem auto;
`;

export const UserEventCardDiv = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const UserEventCardTopDiv = styled.div`
  display: flex;
`;

export const UserEventCardTopLeftDiv = styled.div`
  width: 50%;
  display: flex;
`;

export const UserEventCardTopRightDiv = styled.div`
  width: 50%;
  display: flex;
`;

export const UserEventCardBottomDiv = styled.div`
  display: flex;
`;
export const UserEventCardButtonDiv = styled.div`
  text-align: right;
`;

export const UserEventApplyButton = styled(Button)`
  height: 22px;
  width: 20%;
  margin-right: 5px;
  padding: 0 5px 0 5px;
  background-color: #5c7ef9;
  color: white;
`;

export const UserEventAttendedDiv = styled.div`
  height: 22px;
  width: 20%;
  margin-left: 80%;
  padding: 0 5px 0 5px;
  background-color: grey;
  color: white;
  p {
    text-align: center;
  }
`;
