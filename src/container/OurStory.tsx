import * as React from "react";
import { ContextFont, HeaderFont1, HeaderFont3 } from "../cssJs/mianPageCss";
import {
  OurStoryContext,
  OurStoryDiv,
  OurStoryHeader,
  OurStoryImgPart,
  OurStoryPart,
  OurStoryPartLeft,
  OurStoryPartRight,
} from "../cssJs/ourStoryCss";
import ourStory1 from "../files/ourStory1.png";
import ourStory2 from "../files/ourStory2.png";
import ourStory3 from "../files/ourStory3.png";
import ourStory4 from "../files/ourStory4.png";

const OurStory = (): JSX.Element => {
  return (
    <OurStoryDiv>
      <OurStoryHeader>
        <HeaderFont1>Our Story</HeaderFont1>
      </OurStoryHeader>
      <OurStoryContext>
        <OurStoryPart>
          <OurStoryPartLeft>
            <OurStoryImgPart>
              <img src={ourStory1} />
            </OurStoryImgPart>
          </OurStoryPartLeft>
          <OurStoryPartRight>
            <ContextFont>
              Since 2009, New Zealand Love Earth Publishing House published a
              long-term missing voice from the perspective of caring for the
              earth and human harmony: Love, a Chinese and English bilingual
              journal for readers at home and abroad. Over the years, we have
              faced up to the dignity and value of mankind, committed to energy
              conservation and emission reduction, low-carbon environmental
              protection, green life concerns and forward-looking insights. Let
              the earth full of more love, help the people in trouble, we give
              the earth a blessing, children a hope, people around a
              Thanksgiving. This is the goal that Love the Earth Press has
              always been striving to achieve and to share with readers their
              love for the homeland on which human beings live.
            </ContextFont>
          </OurStoryPartRight>
        </OurStoryPart>
        <OurStoryPart>
          <OurStoryPartRight>
            <HeaderFont3>Our Mission</HeaderFont3>
            <ContextFont>
              The mission of Love the Earth Press is to promote love and
              publicize people conserving the environment. We take care of
              vulnerable people and pay attention to the inequality in the
              world. To understand the causes of injustice and poverty and to
              protect the environment are our duties.
            </ContextFont>
          </OurStoryPartRight>
          <OurStoryPartLeft>
            <OurStoryImgPart>
              <img src={ourStory2} />
            </OurStoryImgPart>
          </OurStoryPartLeft>
        </OurStoryPart>
        <OurStoryPart>
          <OurStoryPartLeft>
            <OurStoryImgPart>
              <img src={ourStory3} />
            </OurStoryImgPart>
          </OurStoryPartLeft>
          <OurStoryPartRight>
            <HeaderFont3>Our Vision</HeaderFont3>
            <ContextFont>
              Let the earth be filled with more love and help those who have
              difficulties. We give the earth a blessing, children a hope, and
              people around us a thanksgiving. This is the consistent purpose
              and goal that Love the Earth press has been striving to achieve
              and to share with readers the love for the homeland on which human
              beings depend for existence.
            </ContextFont>
          </OurStoryPartRight>
        </OurStoryPart>
        <OurStoryPart>
          <OurStoryPartRight>
            <HeaderFont3>What do we do</HeaderFont3>
            <ContextFont>
              Love the Earth press strongly supports the protection of the
              earth’s environment in an increasingly complex and deteriorating
              situation. Love the Earth press website to “love the earth, love
              life; New life, New Zealand” is a slogan dedicated to providing
              accurate information and advocating green lifestyle and services
              to New Zealand and overseas readers. All staff work day and night
              to create one of the most trustworthy voices in the region.
            </ContextFont>
          </OurStoryPartRight>
          <OurStoryPartLeft>
            <OurStoryImgPart>
              <img src={ourStory4} />
            </OurStoryImgPart>
          </OurStoryPartLeft>
        </OurStoryPart>
      </OurStoryContext>
    </OurStoryDiv>
  );
};

export default OurStory;
