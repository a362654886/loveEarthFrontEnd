import * as React from "react";
import { useState } from "react";
import { appointmentAdd } from "../api/appointmentApi";
import InputBox from "../components/InputBox";
import {
  EducationDiv,
  EducationFlexDiv,
  EducationHeader,
  EducationImgDiv,
  EducationInputDiv,
  EducationLeftDiv,
  EducationMainDiv,
  EducationRightDiv,
  ImgP,
  SmallP,
} from "../cssJs/educationCss";
import { ContextFont, HeaderFont1, HeaderFont2, HeaderFont3 } from "../cssJs/mianPageCss";
import {
  ButtonDiv,
  ButtonPrimary,
  Loading,
  LoadingDiv,
} from "../cssJs/publicCss";
import education1 from "../files/education1.png";
import education2 from "../files/education2.png";
import education3 from "../files/education3.png";
import education4 from "../files/education4.png";
import education5 from "../files/education5.png";
import education6 from "../files/education6.png";
import education7 from "../files/education7.png";
import education8 from "../files/education8.png";
import { AppointmentType } from "../types/AppointmentType";
import { InputBoxType } from "../types/EnumTypes";

const Education = (): JSX.Element => {
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentEmail, setAppointmentEmail] = useState("");
  const [appointmentPhone, setAppointmentPhone] = useState("");
  const [appointmentContext, setAppointmentContext] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<Element>): void => {
    const type = (e.target as HTMLInputElement).placeholder;
    switch (type) {
      case "Name":
        setAppointmentName((e.target as HTMLInputElement).value);
        break;
      case "Email":
        setAppointmentEmail((e.target as HTMLInputElement).value);
        break;
      case "Phone":
        setAppointmentPhone((e.target as HTMLInputElement).value);
        break;
      case "Context":
        setAppointmentContext((e.target as HTMLInputElement).value);
        break;
    }
  };

  const onTimeChange = (e: any) => setAppointmentDate(new Date(e._d));

  const submit = async () => {
    setLoading(true);
    const appointment: AppointmentType = {
      _id: appointmentEmail,
      name: appointmentName,
      email: appointmentEmail,
      phone: appointmentPhone,
      context: appointmentContext,
      time: appointmentDate,
    };
    const result = await appointmentAdd(appointment);
    console.log(result);
    setLoading(false);
  };

  const getAppointment = () => {
    if (!loading) {
      return (
        <EducationInputDiv>
          <HeaderFont3>Appointment</HeaderFont3>
          <InputBox
            Title="Name"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={appointmentName}
          />
          <InputBox
            Title="Email"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={appointmentEmail}
          />
          <InputBox
            Title="Phone"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={appointmentPhone}
          />
          <InputBox
            Title="Time"
            onChange={onTimeChange}
            type={InputBoxType.DATE_PICKER}
          />
          <InputBox
            Title="Context"
            onChange={onChange}
            type={InputBoxType.TEXTAREA}
            value={appointmentContext}
          />
          <ButtonDiv>
            <ButtonPrimary onClick={submit}>Submit</ButtonPrimary>
          </ButtonDiv>
        </EducationInputDiv>
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
    <EducationDiv>
      <EducationHeader>
        <HeaderFont1>Education and Culture Programs</HeaderFont1>
      </EducationHeader>
      <EducationMainDiv>
        <HeaderFont3>
          We encourage our readers to understand the importance of learning and
          we believe life can be improved through learning. Our education and
          culture program featured a range of learning activities from
          Mathematics classes, to language learning and holiday programs. We are
          aimed to helper our younger ones to love the earth, love life and also
          gain self-achievement from learning new things.
        </HeaderFont3>
      </EducationMainDiv>
      <EducationFlexDiv>
        <EducationLeftDiv>
          <HeaderFont2>Chinese-learning programmes</HeaderFont2>
          <ContextFont>
            We offer Chinese culture relevant courses like KungFu, Chinese
            painting, and Chinese calligraphy, Holiday programmes etc. Our
            professional teams of Chinese teachers are all native Mandarin
            speakers, with extensive experience teaching Mandarin as a foreign
            language.
          </ContextFont>
          <HeaderFont3>Range of lessons included :</HeaderFont3>
          <ContextFont>
            Basic conversational Mandarin, intermediate and advanced Chinese.o
            Business Mandarin including business and industry culture
            introduction.
          </ContextFont>
          <ContextFont>Study Abroad Programmes </ContextFont>
          <ContextFont>Customised Chinese lessons for any age and any purpose.</ContextFont>
        </EducationLeftDiv>
        <EducationRightDiv>
          <EducationImgDiv>
            <img src={education1} />
          </EducationImgDiv>
        </EducationRightDiv>
      </EducationFlexDiv>
      <EducationFlexDiv>
        <EducationLeftDiv>
          <HeaderFont3>Children Chinese</HeaderFont3>
          <ContextFont>
            One-to-one course to understand mandarin, to show understanding and
            report briefly; to speak out opinions to the public; to train
            reading ability, to read books and journal; to train writing
            ability, to write some short articles. Fun and game course: teach
            through lively activities: to learn Chinese songs, painting, and
            dances; read fables to increase interest in Chinese culture.
            Mathematics: help children learn mathematics in bilingual; help
            students deal with different kinds of mathematics problems; provide
            special training before examinations.
          </ContextFont>
        </EducationLeftDiv>
        <EducationRightDiv>
          <HeaderFont3>Holiday programme (Study Abroad holiday programme)</HeaderFont3>
          <ContextFont>
            Travel to China to learn Chinese (Mandarin) language by immersing in
            Chinese culture. Mandarin is one of today’s most widely-used global
            languages, and there may be no better way to learn it than to
            immerse fully in the culture. This program offers an opportunity to
            participate Chinese language classes, and then use new knowledge to
            communicate with the community and your host family. By spending a
            summer or a holiday in big cities in China, students will earn
            academic credit while engaging in a fascinating historical, social,
            and cultural exploration.
          </ContextFont>
        </EducationRightDiv>
      </EducationFlexDiv>
      <EducationFlexDiv>
        <EducationLeftDiv>
          <EducationImgDiv>
            <img style={{ height: "500px", width: "400px" }} src={education2} />
          </EducationImgDiv>
        </EducationLeftDiv>
        <EducationRightDiv>
          <h3>Highlights</h3>
          <SmallP>
            Key cities in China (Beijing, Shanghai, Qingdao, Nanjing, Hangzhou);
          </SmallP>
          <SmallP>
            Attend a top Chinese school (such as Nanjing Foreign Language
            school)
          </SmallP>
          <SmallP>Make friends for life </SmallP>
          <SmallP>Explore various tourist attractions</SmallP>
          <SmallP>Broaden your horizons </SmallP>
          <SmallP>Become fluent in Mandarin </SmallP>
          <SmallP>Adventure and explore</SmallP>
          <SmallP> 24/7 local support</SmallP>
          <EducationImgDiv style={{ height: "150px", width: "100%" }}>
            <img style={{ height: "150px", width: "100%" }} src={education3} />
          </EducationImgDiv>
        </EducationRightDiv>
      </EducationFlexDiv>
      <EducationFlexDiv>
        <EducationLeftDiv style={{ height: "1000px" }}>
          <HeaderFont2>After–school Care Programme</HeaderFont2>
          <ContextFont>
            This after-school care programme is aimed to help children to make
            the most of their afterschool time. Our programme is carefully
            designed for children. They will learn things from having fun, and
            we will help them grow mentally, physically, emotionally and
            spiritually. Our programme is aligned with the philosophy New
            Zealand Mother Care Foundation and Love Earth Press. Our goal is to
            help ensure good health and well-being of children. All of our
            activities focus not only on the growth and future development of
            children but also on their mental health as well. For more details,
            please read carefully through our Love the Earth Press After School
            Care Programme T&Cs.
          </ContextFont>
          <HeaderFont3>Session Options</HeaderFont3>
          <ContextFont>
            -3pm to 4.30pm (half session); -3pm to 6.00pm (full session, with
            pick up at any time before 6.00pm). Afternoon tea will be provided
            for all children around 3.15pm, with further snacks available for
            children stay on after 4.30pm.
          </ContextFont>
          <HeaderFont3>Booking Information</HeaderFont3>
          <ContextFont>
            There are some easy ways to find more information and to make a
            booking. See the form below:
          </ContextFont>
        </EducationLeftDiv>
        <EducationRightDiv>
          <HeaderFont3>Information</HeaderFont3>
          <ContextFont>
            We provide a variety of indoor & outdoor activities for children
            with our trained and experienced supervisor every day of school
            term. This include:
          </ContextFont>
          <EducationImgDiv>
            <EducationFlexDiv>
              <div>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={education4}
                />
                <ImgP>Time for children to complete their school homework</ImgP>
              </div>
              <div>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={education5}
                />
                <ImgP>Theme activities (Environmental and language club)</ImgP>
              </div>
            </EducationFlexDiv>
            <EducationFlexDiv>
              <div>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={education6}
                />
                <ImgP>Playing games and sports</ImgP>
              </div>
              <div>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={education7}
                />
                <ImgP>Reading books</ImgP>
              </div>
            </EducationFlexDiv>
            <EducationFlexDiv>
              <div style={{ margin: "0 auto" }}>
                <img
                  style={{ height: "200px", width: "400px" }}
                  src={education8}
                />
                <ImgP>Or simply get relaxed and play!</ImgP>
              </div>
            </EducationFlexDiv>
          </EducationImgDiv>
        </EducationRightDiv>
      </EducationFlexDiv>
    </EducationDiv>
  );
};

export default Education;
