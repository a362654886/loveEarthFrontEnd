import * as React from "react";
import { Route, Switch } from "react-router-dom";
import UserEventApply from "../ProfileManagement/UserEventApply";
import UserInfoManagement from "../ProfileManagement/UserInfoManagement";
import UserVolunteerManagement from "../ProfileManagement/UserVolunteerManagement";

const ProfileManagementRouter = (): JSX.Element => {
    /*
    <Route component={HomePage} path="/mainPage/home" />
          <Route component={MerchandisePage} path="/mainPage/merchandise" />
          <Route component={ForumMainPage} path="/mainPage/forumMain" />
          <Route component={UserManagementPage} path="/mainPage/userManagement"/>
    */
  
    return (
      <>
        <Switch>
          <Route component={UserInfoManagement} path="/mainPage/userManagement/userInfoManagement" />
          <Route component={UserVolunteerManagement} path="/mainPage/userManagement/userVolunteerManagement" />
          <Route component={UserEventApply} path="/mainPage/userManagement/userEventApply" />
        </Switch>
      </>
    );
  };
  
  export default ProfileManagementRouter;