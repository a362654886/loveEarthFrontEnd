import styled from "styled-components";
import educationHeader from "../files/educationHeader.png";

export const EducationDiv = styled.div`
  background-color: #fdfff4;
`;

export const EducationHeader = styled.div`
  background-image: url(${educationHeader});
  background-size: 100% 100%;
  background-color: #e4f1d0;
  height: 280px;
  h1 {
    padding-top: 90px;
    padding-left: 40px;
    font-size: 50px;
  }
`;

export const EducationMainDiv = styled.div`
  h3 {
    margin: 3rem auto;
    width: 80%;
    text-align: center;
  }
`;

export const EducationFlexDiv = styled.div`
  display: flex;
  margin: 2rem;
`;

export const EducationLeftDiv = styled.div`
  width: 50%;
  h2 {
    margin: 2rem;
  }
  p {
    margin: 2rem;
    font-size: 20px;
  }
  h3 {
    margin: 2rem;
    color: #39563a;
  }
`;

export const EducationRightDiv = styled.div`
  width: 50%;
  h3 {
    margin: 2rem;
    color: #39563a;
  }
`;
export const SmallP = styled.p`
  font-size: 15px;
`;

export const ImgP = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const EducationImgDiv = styled.div`
  height: 325px;
  width: 450px;
  margin: 0 auto;
  img {
    height: 325px;
    width: 450px;
  }
`;

export const EducationInputDiv = styled.div`
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
