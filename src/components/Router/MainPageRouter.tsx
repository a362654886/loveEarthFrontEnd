import * as React from "react";
import { Route, Switch } from "react-router-dom";
import OurStory from "../../container/OurStory";
import Magazine from "../../container/Magazine";
import HomePage from "../HomePage/HomePage";
import Novels from "../../container/Novels";
import Education from "../../container/Education";
import Volunteer from "../../container/Volunteer";
import NewAndEvent from "../../container/NewAndEvent";
import Subscribe from "../../container/Subscribe";
import OurTeam from "../../container/OurTeam";
import ContactUs from "../../container/ContactUs";
import SignUpPage from "../../container/SignUpPage";
import ProfileManagement from "../../container/ProfileManagement";
//import ForumMainPage from "../../container/ForumMainPage";
//import MerchandisePage from "../../container/MerchandisePage";
//import UserManagementPage from "../../container/UserManagementPage";
//import HomePage from "../HomePage/HomePage";

const MainPageRouter = (): JSX.Element => {
  /*
  <Route component={HomePage} path="/mainPage/home" />
        <Route component={MerchandisePage} path="/mainPage/merchandise" />
        <Route component={ForumMainPage} path="/mainPage/forumMain" />
        <Route component={UserManagementPage} path="/mainPage/userManagement"/>
  */

  return (
    <>
      <Switch>
        <Route component={HomePage} path="/mainPage/home" />
        <Route component={Subscribe} path="/mainPage/subscribe" />
        <Route component={OurStory} path="/mainPage/ourStory" />
        <Route component={Magazine} path="/mainPage/magazine" />
        <Route component={Novels} path="/mainPage/novels" />
        <Route component={Education} path="/mainPage/education" />
        <Route component={Volunteer} path="/mainPage/volunteer" />
        <Route component={NewAndEvent} path="/mainPage/newAndEvent" />
        <Route component={OurTeam} path="/mainPage/ourTeam" />
        <Route component={ContactUs} path="/mainPage/contactUs" />
        <Route component={SignUpPage} path="/mainPage/signUp" />
        <Route component={ProfileManagement} path="/mainPage/userManagement" />
      </Switch>
    </>
  );
};

export default MainPageRouter;
