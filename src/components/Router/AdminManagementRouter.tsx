import * as React from "react";
import { Route, Switch } from "react-router-dom";
import AdminManagement from "../../container/AdminMangement";
import EventAdd from "../AdminManagement/EventAdd";
import EventsTable from "../AdminManagement/EventsTable";
import UsersTable from "../AdminManagement/UsersTable";
import VolunteerApply from "../AdminManagement/VolunteerApply";

const AdminManagementRouter = (): JSX.Element => {
  /*
    <Route component={HomePage} path="/mainPage/home" />
          <Route component={MerchandisePage} path="/mainPage/merchandise" />
          <Route component={ForumMainPage} path="/mainPage/forumMain" />
          <Route component={UserManagementPage} path="/mainPage/userManagement"/>
    */

  return (
    <>
      <Switch>
        <Route
          component={UsersTable}
          path="/adminManagementPage/users"
        />
        <Route
          component={VolunteerApply}
          path="/adminManagementPage/volunteer"
        />
        <Route
          component={EventAdd}
          path="/adminManagementPage/eventAdd"
        />
        <Route
          component={EventsTable}
          path="/adminManagementPage/eventTables"
        />
      </Switch>
    </>
  );
};

export default AdminManagementRouter;
