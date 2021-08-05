import * as React from "react";
import { useState } from "react";
import { volunteerAdd } from "../api/volunteerApi";
import InputBox from "../components/InputBox";
import { SliderVolunteerDiv } from "../components/SliderVolunteerDiv";
import { ContextFont, HeaderFont1, HeaderFont2, HeaderFont3 } from "../cssJs/mianPageCss";
import {
  ButtonDiv,
  ButtonPrimary,
  Loading,
  LoadingDiv,
} from "../cssJs/publicCss";
import {
  VolunteerDiv,
  VolunteerFlexDiv,
  VolunteerHeader,
  Volunteer1Img,
  VolunteerImgDiv,
  VolunteerMainDiv,
  VolunteerTextDiv,
  Volunteer2Img,
  Volunteer3Img,
  VolunteerInputDiv,
  VolunteerPicDiv,
} from "../cssJs/volunteerCsss";
import volunteer1 from "../files/volunteer1.png";
import volunteer2 from "../files/volunteer2.png";
import volunteer3 from "../files/volunteer3.png";
import { InputBoxType } from "../types/EnumTypes";
import { VolunteerType } from "../types/VolunteerType";

const Volunteer = (): JSX.Element => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userContext, setUserContext] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<Element>): void => {
    const type = (e.target as HTMLInputElement).placeholder;
    switch (type) {
      case "Name":
        setUserName((e.target as HTMLInputElement).value);
        break;
      case "Email":
        setUserEmail((e.target as HTMLInputElement).value);
        break;
      case "Phone":
        setUserPhone((e.target as HTMLInputElement).value);
        break;
      case "Context":
        setUserContext((e.target as HTMLInputElement).value);
        break;
    }
  };

  const submit = async () => {
    setLoading(true);
    const volunteer: VolunteerType = {
      _id: userEmail,
      name: userName,
      email: userEmail,
      phone: userPhone,
      context: userContext,
    };
    const result = await volunteerAdd(volunteer);
    setLoading(false);
  };

  const getVolunteer = () => {
    if (!loading) {
      return (
        <VolunteerInputDiv>
          <HeaderFont3>Join Us</HeaderFont3>
          <InputBox
            Title="Name"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={userName}
          />
          <InputBox
            Title="Email"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={userEmail}
          />
          <InputBox
            Title="Phone"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={userPhone}
          />
          <InputBox
            Title="Context"
            onChange={onChange}
            type={InputBoxType.TEXTAREA}
            value={userContext}
          />
          <ButtonDiv>
            <ButtonPrimary onClick={submit}>Submit</ButtonPrimary>
          </ButtonDiv>
        </VolunteerInputDiv>
      );
    } else {
      return (
        <LoadingDiv>
          <Loading />
        </LoadingDiv>
      );
    }
  };

  return (
    <VolunteerDiv>
      <VolunteerHeader>
        <HeaderFont1>Volunteer And Charity Programs</HeaderFont1>
      </VolunteerHeader>
      <VolunteerMainDiv>
        <HeaderFont2>
          We are New Zealand Chinese Learning (新西兰学习中文中心), New Zealand
          Mother Care Foundation （新西兰关爱母亲基金会）and Love the Earth
          Press （爱地球出版社). You will be one of the NZCL volunteer team who
          assists with the work of these three organisations. We need you to
          help us continue to grow. We have had some amazing success in what we
          do and have truly changed the lives of many people in New Zealand –
          but we need YOU to help even more people, help us organise volunteer,
          education and culture, charity programmes and also Love the Earth
          (爱地球杂志) serials.
        </HeaderFont2>
        <VolunteerFlexDiv>
          <VolunteerTextDiv>
            <HeaderFont3>NZ Volunteers</HeaderFont3>
            <ContextFont>
              Traditional Chinese Medicine (TCM) is a medication system used to
              diagnose and treat illnesses; it has been used in China since
              thousands years ago, and it is now widely practised throughout the
              world.
            </ContextFont>
          </VolunteerTextDiv>
          <VolunteerImgDiv>
            <Volunteer1Img>
              <img src={volunteer1} />
            </Volunteer1Img>
          </VolunteerImgDiv>
        </VolunteerFlexDiv>
        <VolunteerFlexDiv>
          <VolunteerImgDiv>
            <Volunteer2Img>
              <img src={volunteer2} />
            </Volunteer2Img>
          </VolunteerImgDiv>
          <VolunteerTextDiv>
            <HeaderFont3>Love the Earth volunteers</HeaderFont3>
            <ContextFont>
              Traditional Chinese Medicine (TCM) is a medication system used to
              diagnose and treat illnesses; it has been used in China since
              thousands years ago, and it is now widely practised throughout the
              world.
            </ContextFont>
          </VolunteerTextDiv>
        </VolunteerFlexDiv>
        <VolunteerFlexDiv>
          <VolunteerTextDiv>
            <HeaderFont3>United International Charity Association</HeaderFont3>
            <ContextFont>
              One World, One Family Wherever the mothers and children in
              poverty, Wherever is the United International Charity Love Earth
              Press, New Zealand Chinese Learning Center, MaMa Magazine, China
              MaMa World Federation of Charitable Organizations, World
              Federation of Chinese Medicine Organizations, World Federation of
              Painter Organizations, World Federation of Writer Organizations,
              World Federation of Chinese Zhiqing Organizations, World
              Federation of Single Organizations.
            </ContextFont>
          </VolunteerTextDiv>
          <VolunteerImgDiv>
            <Volunteer3Img>
              <img src={volunteer3} />
            </Volunteer3Img>
          </VolunteerImgDiv>
        </VolunteerFlexDiv>
      </VolunteerMainDiv>
      <VolunteerPicDiv>
        <SliderVolunteerDiv />
      </VolunteerPicDiv>
    </VolunteerDiv>
  );
};

export default Volunteer;
