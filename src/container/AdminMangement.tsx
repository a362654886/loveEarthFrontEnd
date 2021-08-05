import * as React from "react";
import { ProfileManagementDiv, SideMenu } from "../cssJs/profileManagementCss";
import { Row, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory } from "react-router-dom";
import ProfileManagementRouter from "../components/Router/ProfileManagementRouter";
import {
  AdminHeaderDiv,
  AdminManagementDiv,
} from "../cssJs/adminManagementCss";
import AdminManagementRouter from "../components/Router/AdminManagementRouter";

const AdminManagement = (): JSX.Element => {
  const history = useHistory();

  const toPage = (url: string): void => {
    history.replace({
      pathname: `${url}`,
    });
  };

  return (
    <>
      <AdminHeaderDiv>
        <h3>Admin page</h3>
      </AdminHeaderDiv>
      <AdminManagementDiv>
        <SideMenu>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title="Admin Management">
              <Menu.Item
                key="1"
                onClick={() => toPage("/adminManagementPage/users")}
              >
                User Management
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => toPage("/adminManagementPage/volunteer")}
              >
                Volunteer Apply
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Event Management">
              <Menu.Item
                key="3"
                onClick={() => toPage("/adminManagementPage/eventAdd")}
              >
                Event Add
              </Menu.Item>
              <Menu.Item
                key="4"
                onClick={() => toPage("/adminManagementPage/eventTables")}
              >
                Events Detail
              </Menu.Item>
            </SubMenu>
          </Menu>
        </SideMenu>
        <AdminManagementRouter />
      </AdminManagementDiv>
    </>
  );
};

export default AdminManagement;
