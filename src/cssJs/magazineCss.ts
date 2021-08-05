import styled from "styled-components";
import magazinePart2 from "../files/magazinePart2.png";
import magazinePart3 from "../files/magazinePart3.png";
import magazineMiddle from "../files/magazineMiddle.png";
import middleBackground from "../files/middleBackground.png";

export const MagazineDiv = styled.div`
  background-color: #fdfff4;
`;

export const MagazineHeader = styled.div`
  background-color: #e4f1d0;
  height: 160px;
  h1 {
    padding-top: 40px;
    text-align: center;
    font-size: 55px;
  }
`;

export const MagazinePart = styled.div`
  display: flex;
  margin: 2rem;
`;

export const Magazine1LeftPart = styled.div`
  width: 50%;
`;

export const Magazine1RightPart = styled.div`
  width: 50%;
  background-image: url(${magazinePart2});
  background-size: 100% 100%;
  p {
    padding-top: 75px;
    padding-left: 90px;
    width: 95%;
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Magazine2LeftPart = styled.div`
  width: 50%;
  background-image: url(${magazinePart3});
  background-size: 100% 100%;
  p {
    padding-top: 115px;
    padding-left: 30px;
    width: 95%;
    font-size: 17px;
    font-weight: bold;
  }
`;

export const MagazineImg = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
  img {
    height: 400px;
    width: 400px;
  }
`;

export const MagazineMiddlePart = styled.div`
  background-image: url(${magazineMiddle});
  height: 600px;
  background-size: 100% 100%;
  margin: 5rem;
`;

export const MagazineMiddle2Part = styled.div`
  height: 600px;
  h2 {
    padding-left: 30%;
    padding-right: 5%;
  }
  p {
    padding-left: 30%;
    padding-right: 5%;
    font-size: 20px;
  }
  h3 {
    color: #065c50;
    font-size: 40px;
    margin: 2rem;
  }
`;

export const MagazineMiddle = styled.div`
  background-image: url(${middleBackground});
  height: 1100px;
  background-size: 100% 100%;
  margin: 5rem;
`;
