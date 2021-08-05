import * as React from "react";
import { ProfileManagementDiv, SideMenu } from "../cssJs/profileManagementCss";
import { Row, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory } from "react-router-dom";
import ProfileManagementRouter from "../components/Router/ProfileManagementRouter";

const ProfileManagement = (): JSX.Element => {
  const history = useHistory();

  const toPage = (url: string): void => {
    history.replace({
      pathname: `/mainPage/userManagement/${url}`,
    });
  };

  return (
    <ProfileManagementDiv>
      <SideMenu>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" title="Profile Management">
            <Menu.Item key="1" onClick={() => toPage("userInfoManagement")}>
              User Information
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => toPage("userVolunteerManagement")}
            >
              User Volunteer
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => toPage("userEventApply")}
            >
              User Event
            </Menu.Item>
          </SubMenu>
        </Menu>
      </SideMenu>
      <ProfileManagementRouter />
    </ProfileManagementDiv>
  );
};

export default ProfileManagement;
