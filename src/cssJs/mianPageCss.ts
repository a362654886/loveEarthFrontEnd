import { Button } from "antd";
import styled from "styled-components";
import { Input } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import mainPage from "../files/mainPagePng.png";
import mainPage3 from "../files/mainPagePng3.png";
import { DropdownButton } from "react-bootstrap";

export const HeaderMenu = styled.div`
  width: 100%;
  position: relative;
`;

export const HeaderRow1 = styled.div`
  display: flex;
  width: 1100px;
  right: 20px;
  top: 30px;
  position: absolute;
`;

export const HeaderRow2 = styled.div`
  width: 100%;
  top: 120px;
  position: absolute;
`;

//menu
export const Menu = styled.div`
  width: 930px;
  display: flex;
  font-family: "Josefin Sans,sans-serif";
`;

export const MenuButtons = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  a:hover {
    background-color: #0062cc;
    color: white;
  }
`;

export const MenuButton = styled(Link)`
  height: 35px;
  padding: 2px 5px 0 5px;
  font-size: 18px;
  border-radius: ${(props) => props.property};
  width: ${(props) => props.style?.width};
  color: black;
  p {
    text-align: center;
    padding-top: 3px;
  }
`;

export const MenuSelectButton = styled(DropdownButton)`
  height: 20px;
  padding: 0 5px 0 5px;
  font-size: 20px;
  border-radius: ${(props) => props.property};
  width: ${(props) => props.style?.width};
  color: black;
  p {
    text-align: center;
    padding-top: 5px;
  }
  button {
    background-color: #fdfff4;
    color: black;
    border-color: #fdfff4;
  }
`;

// search
export const SearchMenu = styled.div`
  width: 40%;
  display: flex;
  margin: 0 auto;
`;

export const SearchInput = styled(Input)`
  border-radius: 15px 0 0 15px;
  height: 32px;
  width: 70%;
  margin-left: 10%;
  //margin: 1rem;
`;

export const SearchButton = styled(Button)`
  height: 32px;
  width: 20%;
  margin-right: 5px;
  padding: 0 5px 0 5px;
  background-color: #5c7ef9;
  border-radius: 0 15px 15px 0;
  color: white;
`;

//profile
export const Profile = styled.div`
  flex-grow: 0.1;
  width: 200px;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  height: 30px;
  width: 50%;
  margin-right: 5px;
  padding: 0 5px 0 5px;
  background-color: #5c7ef9;
  border-radius: 15px;
  color: white;
`;

export const ProfileDiv = styled.div`
  display: flex;
  margin-left: 2rem;
`;

//main page

export const MainPage = styled.div`
  min-height: 1000px;
  height: auto;
`;

export const MainPageImgDiv = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${mainPage});
  background-size: 100% 100%;
`;

export const MainPageTextDiv = styled.div`
  padding-top: 100px;
  padding-left: 200px;
  font-size: 40px;
  font-weight: bold;
  font-family: "Josefin Sans,sans-serif";
`;

export const MainPagePDiv = styled.p`
  font-size: 15px;
  width: 500px;
  font-family: "Josefin Sans,sans-serif";
  opacity: 0.7;
`;

export const LearnButton = styled(Button)`
  background-color: #f46f5c;
  height: 32px;
  width: 120px;
  border-radius: 20px 20px 20px 20px;
  padding: 0;
  line-height: 32px;
  margin: 0;
  color: black;
  font-weight: bold;
  margin-left: 200px;
`;

export const MainPageFlexDiv = styled.div`
  font-family: "Josefin Sans,sans-serif";
  width: 80%;
  margin: 0 auto;
  h2 {
    font-family: "Josefin Sans,sans-serif";
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
  }
  p {
    font-size: 20px;
  }
`;

export const MainFlexDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
`;

export const MainFlexPartDiv = styled.div`
  width: 33.33%;
  text-align: center;
  display: inline;
  img {
    width: 200px;
    height: 200px;
    background-size: 100% 100%;
    border-radius: 20px 20px 20px 20px;
  }
  p {
    width: 80%;
    margin: 0 auto;
  }
`;

export const MainFlexPartButton = styled(Button)`
  background-color: #e4f1d0;
  width: 200px;
  height: 60px;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 30px 30px 30px 30px;
  padding: 10px 30px 10px 10px;
`;

export const MainPage3ImgDiv = styled.div`
  height: 200px;
  background-image: url(${mainPage3});
  h2 {
    padding-top: 60px;
    margin: 0 auto;
    text-align: center;
  }
  p {
    width: 80%;
    padding-top: 20px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
  }
`;

export const MainPage4LeftDiv = styled.div`
  width: 50%;
  text-align: center;
  img {
    margin-top: 30px;
    width: 250px;
    height: 450px;
  }
`;

export const MainPage4RightDiv = styled.div`
  width: 50%;
  h3 {
  }
  p {
    font-size: 20px;
  }
`;

//footer
export const FooterDiv = styled(Footer)`
  background-color: #192b2c;
  display: flex;
`;

export const FooterPartDiv = styled(Footer)`
  background-color: #192b2c;
  width: 25%;
  h4 {
    color: white;
    border-bottom: 1px solid white;
  }
  p {
    text-align: left;
    color: white;
    font-size: 16px;
  }
`;

//slider
export const RecommendSlider = styled.div`
  height: 600px;
  width: 100%;
`;

export const HeaderFont = styled.p`
  font-family: "headerFont";
`;

export const HeaderFont1 = styled.h1`
  font-family: "headerFont";
`;

export const HeaderFont2 = styled.h2`
  font-family: "headerFont";
`;

export const HeaderFont3 = styled.h3`
  font-family: "headerFont";
`;

export const ContextFont = styled.p`
  font-family: "contextFont";
`;

export const LinkDiv = styled.div`
  display: flex;
`;

export const ImgLogoDiv = styled.div`
  height: 50px;
  width: 50px;
  img {
    height: 50px;
    width: 50px;
  }
`;
