import Sider from "antd/lib/layout/Sider";
import { Button } from "react-bootstrap";
import styled from "styled-components";

//menu
export const AdminManagementDiv = styled.div`
  height: 90%;
  width: 100%;
  background-color: #fdfff4;
  position: relative;
  display: flex;
  position: absolute;
`;

export const AdminHeaderDiv = styled.div`
  background-color: #fdfff4;
  margin: 0;
  height: 60px;
  padding: 10px;
  max-width: 100%;
  display: flex;
  h3 {
    width: 100%;
    text-align: center;
  }
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

//event add Management

export const EventAddDiv = styled.div`
  background-color: #fdfff4;
  width: 80%;
  margin: 1rem auto;
`;

// event show

export const EventShowDiv = styled.div`
  background-color: #fdfff4;
  width: 1000px;
  margin: 1rem auto;
`;

export const EventLineDiv = styled.div`
  display: flex;
`;

export const EventIntroduceDiv = styled.div`
  display: flex;
  p {
    height: 150px;
    overflow: auto;
  }
`;

export const EventVolunteerDiv = styled.div`
  max-height: 150px;
  overflow: auto;
`;

export const EventLineElementDiv = styled.div`
  width: 50%;
  display: flex;
`;

export const EventUserDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  div{
    display:flex;
    h6{
      width:100px;
    }
  }
  border-top: 1px solid black;
`;
