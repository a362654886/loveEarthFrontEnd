import styled from "styled-components";
import ourTeam from "../files/ourTeam.png";

export const OurTeamDiv = styled.div`
  background-color: #fdfff4;
`;

export const OurTeamHeader = styled.div`
  background-image: url(${ourTeam});
  background-size: 100% 100%;
  background-color: #e4f1d0;
  height: 260px;
  h1 {
    padding-top: 90px;
    padding-left: 40px;
    font-size: 50px;
  }
`;

export const OurTeamMain = styled.div`
  display: flex;
  margin:1rem;
`;

export const OurTeamLeft = styled.div`
  width: 40%;
  h1 {
    margin-top: 200px;
    text-align: center;
  }
`;

export const OurTeamRight = styled.div`
  width: 60%;
  div {
    display: flex;
  }
  h4 {
    margin: 1rem;
  }
`;
