import * as React from "react";
import {
  NewsAndEvent,
  NewsAndEventHeader,
  NewsAndEventImg,
  NewsAndEventMain,
  NewsAndEventPart,
} from "../cssJs/newsAndEvent";
import novel1 from "../files/novel1.jpg";
import newsAndEvent1 from "../files/newsAndEvent1.png";
import newsAndEvent2 from "../files/newsAndEvent2.png";
import newsAndEvent3 from "../files/newsAndEvent3.png";
import newsAndEvent4 from "../files/newsAndEvent4.png";
import { ContextFont, HeaderFont1, HeaderFont3 } from "../cssJs/mianPageCss";

const NewAndEvent = (): JSX.Element => {
  return (
    <NewsAndEvent>
      <NewsAndEventHeader>
        <HeaderFont1>News and Events</HeaderFont1>
      </NewsAndEventHeader>
      <NewsAndEventMain>
        <NewsAndEventPart>
          <NewsAndEventImg>
            <img src={newsAndEvent1} />
            <HeaderFont3>
              We are coming! Newly released Magazine Serials – Love the Earth
            </HeaderFont3>
            <ContextFont>
              Have a read of the most interesting things about our planet earth!
              Learn everything in a fun way! Continue Reading
            </ContextFont>
          </NewsAndEventImg>
        </NewsAndEventPart>
        <NewsAndEventPart>
          <NewsAndEventImg>
            <img src={newsAndEvent2} />
            <HeaderFont3>Join us! NZCL and Love the Earth volunteer programs!</HeaderFont3>
            <ContextFont>
              Become one of our NZCL and Love the Earth volunteer to help
              people, the earth and yourself! Continue Reading
            </ContextFont>
          </NewsAndEventImg>
        </NewsAndEventPart>
        <NewsAndEventPart>
          <NewsAndEventImg>
            <img src={newsAndEvent3} />
            <HeaderFont3>Out of school – can still be a fun and learning time!</HeaderFont3>
            <ContextFont>
              Our afternschool care program is back! Let us help you to take
              good care of you little ones! Continue Reading
            </ContextFont>
          </NewsAndEventImg>
        </NewsAndEventPart>
        <NewsAndEventPart>
          <NewsAndEventImg>
            <img src={newsAndEvent4} />
            <HeaderFont3>Nancy Liu’s Novel – I Love New Zealand, also love China</HeaderFont3>
            <ContextFont>
              This is about Ah He’s 30 years life in New Zealand. The moon is
              always round, everywhere in the… Continue Reading
            </ContextFont>
          </NewsAndEventImg>
        </NewsAndEventPart>
      </NewsAndEventMain>
    </NewsAndEvent>
  );
};

export default NewAndEvent;
