import styled from "styled-components";
import ourStoryTitle from "../files/ourStoryTitle.png";

export const OurStoryDiv = styled.div`
  background-color: #fdfff4;
`;

export const OurStoryHeader = styled.div`
  height: 250px;
  background-image: url(${ourStoryTitle});
  background-size: 100% 100%;
  h1 {
    padding-top: 60px;
    padding-left: 10%;
    font-size: 60px;
  }
`;

export const OurStoryContext = styled.div`
  p {
    font-family: "Josefin Sans,sans-serif";
    font-size: 20px;
  }
  h3 {
    text-align: center;
    font-weight: bold;
  }
`;

export const OurStoryPart = styled.div`
  display: flex;
  margin: 2rem;
`;

export const OurStoryPartLeft = styled.div`
  width: 50%;
`;

export const OurStoryPartRight = styled.div`
  width: 50%;
`;

export const OurStoryImgPart = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
  img {
    height: 400px;
    width: 400px;
  }
`;
