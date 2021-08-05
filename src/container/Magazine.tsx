import * as React from "react";
import {
  MagazineDiv,
  MagazineHeader,
  MagazineImg,
  Magazine1LeftPart,
  MagazinePart,
  Magazine1RightPart,
  Magazine2LeftPart,
  MagazineMiddlePart,
  MagazineMiddle2Part,
  MagazineMiddle,
} from "../cssJs/magazineCss";
import { ContextFont, HeaderFont1, HeaderFont2, HeaderFont3 } from "../cssJs/mianPageCss";
import magazine1 from "../files/magazine1.png";
import magazinePart4 from "../files/magazinePart4.png";

const Magazine = (): JSX.Element => {
  return (
    <MagazineDiv>
      <MagazineHeader>
        <HeaderFont1>Magazine</HeaderFont1>
      </MagazineHeader>
      <MagazinePart>
        <Magazine1LeftPart>
          <MagazineImg>
            <img src={magazine1} />
          </MagazineImg>
        </Magazine1LeftPart>
        <Magazine1RightPart>
          <ContextFont>
            “One earth, one home.” That is what we have always believed. It is
            our faith to protect the environment, to plant more tress, to
            recycle resources while moving forward with previous conflicts
            between civilians and wars between countries. We, as the descendants
            of the earth who act as tiny cells, can still pay our reverence to
            the planet by starting from a little scratch with a tiny
            contribution given with opportunities.
          </ContextFont>
        </Magazine1RightPart>
      </MagazinePart>
      <MagazinePart>
        <Magazine2LeftPart>
          <ContextFont>
            “One earth, one home.” That is what we have always believed. It is
            our faith to protect the environment, to plant more tress, to
            recycle resources while moving forward with previous conflicts
            between civilians and wars between countries. We, as the descendants
            of the earth who act as tiny cells, can still pay our reverence to
            the planet by starting from a little scratch with a tiny
            contribution given with opportunities.
          </ContextFont>
        </Magazine2LeftPart>
        <Magazine1LeftPart>
          <MagazineImg>
            <img src={magazinePart4} />
          </MagazineImg>
        </Magazine1LeftPart>
      </MagazinePart>
      <MagazineMiddle>
        <MagazineMiddlePart></MagazineMiddlePart>
        <MagazineMiddle2Part>
          <HeaderFont2>Love Earth magazine is an English journal</HeaderFont2>
          <ContextFont>
            The first part includes information and opinions on environmental
            protection and afforestation. The second part is the content of
            mathematics and foreign language. The third part includes in-depth
            reports, interviews and analysis of the problems and characters
            facing New Zealand and the world. Our journalists bring art,
            catering, environment and tourism news from all over the world, as
            well as reviews of the latest books, movies, technology and music.
          </ContextFont>
          <HeaderFont3>
            If you have a concurring vision, we welcome your participation, as
            well as your insights.
          </HeaderFont3>
        </MagazineMiddle2Part>
      </MagazineMiddle>
    </MagazineDiv>
  );
};

export default Magazine;
