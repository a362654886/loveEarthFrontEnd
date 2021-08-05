import * as React from "react";
import { useEffect, useRef } from "react";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LoginType } from "../types/EnumTypes";
import { IStoreState } from "../types/IStoreState";
import LoginModel from "../components/Login/LoginModel";
import {
  BackGroundBody,
  FlexDiv,
  Header,
  LOGO,
  MainBody,
  TitleBlack,
  TitleSubTitle,
} from "../cssJs/publicCss";
import logo from "../files/logo.png";
import MainPageRouter from "../components/Router/MainPageRouter";
import { useHistory } from "react-router-dom";
import {
  ContextFont,
  FooterDiv,
  FooterPartDiv,
  HeaderFont,
  HeaderMenu,
  HeaderRow1,
  HeaderRow2,
  LoginButton,
  Menu,
  MenuButton,
  MenuButtons,
  MenuSelectButton,
  Profile,
  ProfileDiv,
} from "../cssJs/mianPageCss";
import { User } from "../types/User";

const MainPage = (): JSX.Element => {
  const loginUser: User | null = useSelector(
    (state: IStoreState) => state.loginUserState
  );

  const history = useHistory();

  useEffect(() => {
    history.push({
      pathname: "/mainPage/home",
    });
  }, []);

  const toUrl = (url: string) => {
    history.push({
      pathname: `/mainPage/${url}`,
    });
  };

  const authState: LoginType = useSelector(
    (state: IStoreState) => state.authState
  );

  const childrenRef: React.MutableRefObject<{ popUp: () => void }> =
    useRef() as React.MutableRefObject<{ popUp: () => void }>;

  const getLoginForm = () => {
    switch (authState) {
      case LoginType.SUCCESS:
        if (loginUser?.admin == true) {
          return (
            <ProfileDiv>
              <LoginButton
                onClick={() => toProfile("/mainPage/userManagement")}
              >
                Profile
              </LoginButton>
              <LoginButton onClick={() => toProfile("/adminManagementPage")}>
                Admin
              </LoginButton>
            </ProfileDiv>
          );
        } else {
          return (
            <LoginButton onClick={() => toProfile("/mainPage/userManagement")}>
              Profile
            </LoginButton>
          );
        }
      case LoginType.LOADING:
        return <Spinner animation="border" variant="light" />;
      default:
        return (
          <>
            <LoginButton onClick={login}>Log In</LoginButton>
          </>
        );
    }
  };

  const login = () => childrenRef.current.popUp();

  const toProfile = (url: string) => history.replace(url);

  return (
    <div className="backBody">
      <Header>
        <LOGO>
          <img src={logo} />
        </LOGO>
        <HeaderMenu>
          <HeaderRow1>
            <Menu>
              <MenuButtons>
                <MenuButton
                  style={{ width: "100px" }}
                  to="/mainPage/home"
                  property="16px 0 0 16px"
                >
                  <HeaderFont>HOME</HeaderFont>
                </MenuButton>
                <MenuButton style={{ width: "120px" }} to="/mainPage/subscribe">
                  <HeaderFont>SUBSCRIBE</HeaderFont>
                </MenuButton>
                <MenuSelectButton
                  title="PORTOFOLIO"
                  style={{ fontFamily: "headerFont" }}
                >
                  <Dropdown.Item onClick={() => toUrl("magazine")}>
                    Magazine
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => toUrl("novels")}>
                    Novels
                  </Dropdown.Item>
                </MenuSelectButton>
                <MenuSelectButton
                  title="VOLUNTEER"
                  style={{ fontFamily: "headerFont" }}
                >
                  <Dropdown.Item onClick={() => toUrl("volunteer")}>
                    Volunteer Charity Programs
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => toUrl("education")}>
                    Education and Culture Programs
                  </Dropdown.Item>
                </MenuSelectButton>
                <MenuButton
                  style={{ width: "220px" }}
                  to="/mainPage/newAndEvent"
                >
                  <HeaderFont>NEWS AND EVENTS</HeaderFont>
                </MenuButton>
                <MenuSelectButton
                  title="ABOUT US"
                  style={{ fontFamily: "headerFont" }}
                >
                  <Dropdown.Item onClick={() => toUrl("ourStory")}>
                    Our Story
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => toUrl("ourTeam")}>
                    Our Team
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => toUrl("contactUs")}>
                    Contact Us
                  </Dropdown.Item>
                </MenuSelectButton>
              </MenuButtons>
            </Menu>
            <Profile>{getLoginForm()}</Profile>
          </HeaderRow1>
          <HeaderRow2>
            <TitleBlack>Love The Earth Press</TitleBlack>
            <TitleSubTitle>LOVE THE EARTH. LOVE NEW ZEALAND</TitleSubTitle>
          </HeaderRow2>
        </HeaderMenu>
      </Header>
      <BackGroundBody>
        <MainBody>
          <MainPageRouter />
        </MainBody>
      </BackGroundBody>
      <FooterDiv style={{ textAlign: "center" }}>
        <FooterPartDiv>
          <HeaderFont>Get to know us</HeaderFont>
          <img src={logo} />
        </FooterPartDiv>
        <FooterPartDiv>
          <HeaderFont>About NZCL</HeaderFont>
          <ContextFont>Address:</ContextFont>
          <ContextFont>
            Wellington High Court Building (oppsite Victoria University)
          </ContextFont>
          <ContextFont>2 Molesworth St, Pipitea, Wellington</ContextFont>
        </FooterPartDiv>
        <FooterPartDiv>
          <HeaderFont>Contact Us</HeaderFont>
          <ContextFont>Email:</ContextFont>
          <ContextFont>lovingearthpress@gmail.com</ContextFont>
          <ContextFont>TEL : 04-4729106</ContextFont>
          <ContextFont>Mobile : 021-1543065</ContextFont>
        </FooterPartDiv>
        <FooterPartDiv>
          <HeaderFont>Follow Us</HeaderFont>
        </FooterPartDiv>
      </FooterDiv>
      <LoginModel childRef={childrenRef} />
    </div>
  );
};

export default MainPage;
