import styled from "styled-components";

export const NovelsDiv = styled.div`
  background-color: #fdfff4;
`;

export const NovelHeader = styled.div`
  background-color: #e4f1d0;
  height: 110px;
  h1 {
    padding-top: 20px;
    text-align: center;
    font-size: 55px;
  }
`;

export const NovelMain = styled.div`
  display: flex;
`;

export const NovelPart = styled.div`
  display: flex;
  width: 50%;
  margin-top: 2rem;
`;

export const NovelImg = styled.div`
  height: 400px;
  width: 50%;
  margin: 0 auto;
  img {
    height: 400px;
    width: 250px;
    margin-left: 75px;
  }
`;

export const NovelImgText = styled.div`
  h3 {
    width: 80%;
    margin: 0 auto;
  }
  p {
    width: 80%;
    margin: 10px auto;
  }
`;

export const SmallP = styled.p`
  font-size: 10px;
`;

export const BigP = styled.p`
  font-size: 20px;
  font-family: "contextFont";
`;
