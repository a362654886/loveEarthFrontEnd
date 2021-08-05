import * as React from "react";
import { HeaderFont1 } from "../cssJs/mianPageCss";
import { ButtonDiv, ButtonPrimary } from "../cssJs/publicCss";
import {
  SubscribeContext,
  SubscribeDiv,
  SubscribeHeader,
  SubscribeImg,
  SubscribeIntroduce,
  SubscribeMain,
} from "../cssJs/subscribeCss";
import subscribe from "../files/subscribe.png";

const Subscribe = (): JSX.Element => {
  return (
    <SubscribeDiv>
      <SubscribeHeader>
        <HeaderFont1>Subscribe</HeaderFont1>
      </SubscribeHeader>
      <SubscribeMain>
        <SubscribeImg>
          <img src={subscribe} />
        </SubscribeImg>
        <SubscribeContext>
          <SubscribeIntroduce>Introduction</SubscribeIntroduce>
          <ButtonDiv>
            <ButtonPrimary>Subscribe</ButtonPrimary>
          </ButtonDiv>
        </SubscribeContext>
      </SubscribeMain>
    </SubscribeDiv>
  );
};

export default Subscribe;
