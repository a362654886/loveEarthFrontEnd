import * as React from "react";
import {
  ContactUsDiv,
  ContactUsHeader,
  ContactUsImgDiv,
  ContactUsLeft,
  ContactUsMain,
  ContactUsRight,
} from "../cssJs/contactUsCss";

const ContactUs = (): JSX.Element => {
  return (
    <ContactUsDiv>
      <ContactUsHeader>
        <h1>Contact Us</h1>
      </ContactUsHeader>
      <ContactUsMain>
        <ContactUsLeft>
          <h3>OFFICE ADDRESS</h3>
          <h5>Wellington High Court Building</h5>
          <h5>( opposite Victoria University )</h5>
          <h5>2 Molesworth Street, Pipitea, Wellington 6011</h5>
          <h3>TEL:</h3>
          <h5>04 – 4729106</h5>
          <h3>Mobile:</h3>
          <h5>021 – 1543065</h5>
          <h3>Email:</h3>
          <h5>lovingearthpress@gmail.com</h5>
        </ContactUsLeft>
        <ContactUsRight>
          <ContactUsImgDiv></ContactUsImgDiv>
        </ContactUsRight>
      </ContactUsMain>
    </ContactUsDiv>
  );
};

export default ContactUs;
