import { Button } from "antd";
import styled from "styled-components";

export const UserTableDiv = styled.div`
  display: inline;
  width: 80%;
  margin: 1rem auto;
`;

export const UserTableTitle = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: #e4f1d0;
  text-align: center;
`;

export const UserTableElement = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

export const UserTableItem = styled.div`
  width: 20%;
  text-align: center;
`;

export const UserSendButtonDiv = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 1rem;
`;

export const UserSendButton = styled(Button)`
  background-color: #6d6d6d;
  height: 22px;
  width: 150px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px;
  line-height: 22px;
  margin: 0px;
  color: white;
`;

export const DetailButton = styled(Button)`
  background-color: #6d6d6d;
  height: 22px;
  width: 70px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px;
  line-height: 22px;
  margin-left: 40px;
  color: white;
  margin: 0px auto;
`;

export const UserSearchDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  label,
  input {
    border-radius: 0px 0px 0px 0px;
  }
  Button {
    background-color: #6d6d6d;
    color: white;
    margin: 1rem;
    right: 10px;
    position: absolute;
  }
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
`;

export const EventEditButton = styled(Button)`
  background-color: #6d6d6d;
  height: 22px;
  width: 70px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px;
  line-height: 22px;
  margin: 0px;
  margin-left: 40px;
  color: white;
`;
