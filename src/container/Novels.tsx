import * as React from "react";
import { HeaderFont1, HeaderFont3 } from "../cssJs/mianPageCss";
import {
  BigP,
  NovelHeader,
  NovelImg,
  NovelImgText,
  NovelMain,
  NovelPart,
  NovelsDiv,
  SmallP,
} from "../cssJs/novelsCss";
import novel1 from "../files/novel1.jpg";

const Novels = (): JSX.Element => {
  return (
    <NovelsDiv>
      <NovelHeader>
        <HeaderFont1>Novels</HeaderFont1>
      </NovelHeader>
      <NovelMain>
        <NovelPart>
          <NovelImg>
            <img src={novel1} />
          </NovelImg>
          <NovelImgText>
            <HeaderFont3>我爱新西兰更爱中国 Love</HeaderFont3>
            <SmallP>Nancy Liu | Novel Series | Completed</SmallP>
            <BigP>
              Nancy
              Liu是一位定居在新西兰三十年的华人。她也是新西兰学习中文中主席，慈善家，社会义工。这本书是向占世界人口五分之一…
              Nancy Liu is a Chinese who has lived in New Zealand for 30 years.
              She is also the President of New Zealand Chinese Learning School,
              a philanthropist and …
            </BigP>
            <SmallP>600,000 Words</SmallP>
          </NovelImgText>
        </NovelPart>
      </NovelMain>
    </NovelsDiv>
  );
};

export default Novels;
