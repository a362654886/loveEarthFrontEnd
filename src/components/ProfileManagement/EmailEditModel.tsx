import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
import { useEffect } from "react";
import { useState, useImperativeHandle } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { emailAdd } from "../../api/emailApi";
import { ButtonPrimary } from "../../cssJs/publicCss";
import { InputBoxType, LoginType } from "../../types/EnumTypes";
import { IStoreState } from "../../types/IStoreState";
import { Input } from "antd";

const PoPup = styled(Modal)`
  .modal-dialog {
    height: 700px;
    width: 1100px;
    margin-left: 200px;
    position: relative;
  }
  .modal-content {
    height: 700px;
    width: 1100px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    margin: -260px -1000px 0 0;
  }
  .modal-header {
    background-color: #e4f1d0;
    border-radius: 30px 30px 0 0;
    color: black;
  }
`;

interface IProps {
  childRef: React.RefObject<{ popUp: () => void }>;
  emails: string[];
}

const EmailEditModel = ({ childRef, emails }: IProps): JSX.Element => {
  const authState: LoginType = useSelector(
    (state: IStoreState) => state.authState
  );

  const [show, setShow] = useState(false);
  const [context, setContext] = useState("");
  const [emailsString, setEmails] = useState("");
  const [subject, setSubject] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(emails);
    let newEmailsString = "";
    emails.forEach((email) => {
      console.log(email);
      newEmailsString += `${email},`;
    });
    setEmails(newEmailsString);
  }, [emails]);

  useImperativeHandle(childRef, () => ({
    popUp: () => handleShow(),
  }));

  const onTextChange = (e: React.ChangeEvent<Element>): void =>
    setContext((e.target as HTMLInputElement).value);

  const onChange = (e: React.ChangeEvent<Element>): void =>
    setSubject((e.target as HTMLInputElement).value);

  const sendEmails = async () =>
    await emailAdd("362654886qq@gmail.com", subject, emails, context);

  return (
    <>
      <PoPup show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>To:</h6>
          {emailsString}
          <h6>Subject:</h6>
          <Input
            placeholder="Subject"
            onChange={onChange}
            type={InputBoxType.INPUT}
            value={subject}
          />
          <h6>Email Context:</h6>
          <TextArea style={{ minHeight: "400px" }} onChange={onTextChange} />
          <ButtonPrimary onClick={() => sendEmails()}>Send</ButtonPrimary>
        </Modal.Body>
      </PoPup>
    </>
  );
};

export default EmailEditModel;
