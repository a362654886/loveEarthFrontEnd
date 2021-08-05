import styled from "styled-components";
import contactUs from "../files/contactUs.png";
import contactUsPage from "../files/contactUsPage.png";

export const ContactUsDiv = styled.div`
  background-color: #fdfff4;
`;

export const ContactUsHeader = styled.div`
  background-image: url(${contactUs});
  background-size: 100% 100%;
  background-color: #e4f1d0;
  height: 260px;
  h1 {
    padding-top: 90px;
    padding-left: 40px;
    font-size: 50px;
  }
`;

export const ContactUsImgDiv = styled.div`
  height: 400px;
  width: 400px;
  background-image: url(${contactUsPage});
  background-size: 100% 100%;
  margin: 0 auto;
`;

export const ContactUsMain = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 80%;
`;

export const ContactUsLeft = styled.div`
  width: 40%;
  text-align: left;
  h3 {
    color: #065c50;
    margin-top: 2rem;
  }
`;

export const ContactUsRight = styled.div`
  width: 60%;
  margin-top: 2rem;
`;
