import * as React from "react";
import {
  ContextFont,
  HeaderFont2,
  HeaderFont3,
  LearnButton,
  MainFlexDiv,
  MainFlexPartButton,
  MainFlexPartDiv,
  MainPage,
  MainPage3ImgDiv,
  MainPage4LeftDiv,
  MainPage4RightDiv,
  MainPageFlexDiv,
  RecommendSlider,
} from "../../cssJs/mianPageCss";
import mainPage1 from "../../files/mainPagePart1.png";
import mainPage2 from "../../files/mainPagePart2.png";
import mainPage3 from "../../files/mainPagePart3.png";
import mainPage4Jpg from "../../files/mainPage4Jpg.jpg";
import { useHistory } from "react-router-dom";
import { SliderDiv } from "../SliderDiv";

const HomePage = (): JSX.Element => {
  const history = useHistory();

  const toPage = (url: string) => {
    history.push({
      pathname: `/mainPage/${url}`,
    });
  };

  const toOutSidePage = (url: string) => {
    window.location.replace(url);
  };

  return (
    <MainPage>
      <RecommendSlider>
        <SliderDiv />
      </RecommendSlider>
      <MainPageFlexDiv>
        <HeaderFont2>Love the Earth Press</HeaderFont2>
        <ContextFont>
          Promote the Press, our vision and mission to protect the environment
          and animals, Love the Earth Serials (爱地球杂志), let more people join
          our volunteers and charity programmes to give back to the communities.
        </ContextFont>
        <MainFlexDiv>
          <MainFlexPartDiv>
            <div>
              <img src={mainPage1} />
            </div>
            <MainFlexPartButton
              onClick={() =>
                toOutSidePage(
                  `https://nzchineselearning.wordpress.com/mothercare/`
                )
              }
            >
              SPONSORS AND PARTNERS
            </MainFlexPartButton>
            <ContextFont>
              New Zealand Mothercare Foundation and New Zealand Chinese Learning
              School are proud of being partners of Love the Earth Press. We are
              together committed to making a difference in people’s daily life.
            </ContextFont>
          </MainFlexPartDiv>
          <MainFlexPartDiv>
            <div>
              <img src={mainPage2} />
            </div>
            <MainFlexPartButton onClick={() => toPage("magazine")}>
              LOVE THE EARTH SERIALS
            </MainFlexPartButton>
            <ContextFont>
              This Serial is the core and the most popular of our Press. It is
              aimed at providing a new perspective of ‘What can we learn from
              our planet earth?’ and ‘How can we treat our planet earth better?’
              to children and teenagers.
            </ContextFont>
          </MainFlexPartDiv>
          <MainFlexPartDiv>
            <div>
              <img src={mainPage3} />
            </div>
            <MainFlexPartButton onClick={() => toPage("volunteer")}>
              VOLUNTEER AND CHARITY
            </MainFlexPartButton>
            <ContextFont>
              Join us with hundreds of volunteers to gain valuable work
              experience, get new skills and training, make new contacts, and
              make a positive difference in your community…Join us if you want
              to share the common vision with us.
            </ContextFont>
          </MainFlexPartDiv>
        </MainFlexDiv>
      </MainPageFlexDiv>
      <MainPage3ImgDiv>
        <HeaderFont2>Love the Earth Press</HeaderFont2>
        <ContextFont>
          We strongly support the protection of the increasingly complex and
          deteriorating earth environment as well as the well being of all
          humanity.
        </ContextFont>
      </MainPage3ImgDiv>
      <MainFlexDiv>
        <MainPage4LeftDiv>
          <img src={mainPage4Jpg} />
        </MainPage4LeftDiv>
        <MainPage4RightDiv>
          <div>
            <HeaderFont3>Mothercare Foundation & NZCL</HeaderFont3>
            <ContextFont>
              Chinese Learning School are proud of being partners of Love the
              Earth Press. We are together committed to making a difference in
              people‛s everyday life
            </ContextFont>
          </div>
          <div>
            <HeaderFont3>Love the Earth Serial</HeaderFont3>
            <ContextFont>
              Love the Earth magazine is the core and the most popular of our
              Press. It is aimed at providing a new perspective of ‘What can we
              learn from our planet earth?‛ and ‘How can we treat our planet
              earth better?‛ to children and teenagers.
            </ContextFont>
          </div>
          <div>
            <HeaderFont3>Volunteer and Charity Programmes</HeaderFont3>
            <ContextFont>
              Join us with hundreds of volunteers to gain valuable work
              experience, get new skills and training, make new contacts, and
              make a positive difference in your community…
            </ContextFont>
          </div>
          <div>
            <HeaderFont3>After-School Care Programme</HeaderFont3>
            <ContextFont>
              Love Earth magazine is an English journal with 20 pages.If you
              have a common vision, we welcome your participation, as well as
              your insights.
            </ContextFont>
          </div>
        </MainPage4RightDiv>
      </MainFlexDiv>
    </MainPage>
  );
};

export default HomePage;
