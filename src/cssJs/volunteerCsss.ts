import styled from "styled-components";
import volunteerHeader from "../files/volunteerHeader.png";

export const VolunteerDiv = styled.div`
  background-color: #fdfff4;
`;

export const VolunteerHeader = styled.div`
  background-image: url(${volunteerHeader});
  background-size: 100% 100%;
  background-color: #e4f1d0;
  height: 280px;
  h1 {
    padding-top: 90px;
    padding-left: 40px;
    font-size: 50px;
  }
`;

export const VolunteerMainDiv = styled.div`
  h2 {
    margin: 3rem auto;
    width: 80%;
    text-align: center;
  }
`;

export const VolunteerFlexDiv = styled.div`
  display: flex;
  margin: 1rem;
`;

export const VolunteerTextDiv = styled.div`
  width: 50%;
  h3 {
    margin: 1rem auto;
    width: 80%;
    text-align: center;
  }
  p {
    margin: 0 auto;
    width: 80%;
    font-family: "Josefin Sans,sans-serif";
    font-size: 20px;
  }
`;

export const VolunteerImgDiv = styled.div`
  width: 50%;
`;

export const Volunteer1Img = styled.div`
  height: 300px;
  width: 500px;
  margin: 0 auto;
  img {
    height: 300px;
    width: 500px;
  }
`;

export const Volunteer2Img = styled.div`
  height: 300px;
  width: 500px;
  margin: 0 auto;
  img {
    height: 300px;
    width: 500px;
  }
`;

export const Volunteer3Img = styled.div`
  height: 500px;
  width: 500px;
  margin: 0 auto;
  img {
    height: 500px;
    width: 500px;
  }
`;

export const VolunteerInputDiv = styled.div`
  width: 100%;
  margin: 1rem auto;
  background-color: #e4f1d0;
  h3 {
    text-align: center;
  }
  div {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const VolunteerPicDiv = styled.div`
  height: 200px;
`;

export const VolunteerImg = styled.div`
  height: 200px;
  width: 150px;
  img {
    height: 200px;
    width: 150px;
  }
`;
