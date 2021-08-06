import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { userQuery } from "../../api/userApi";
import { User, VolunteerType } from "../../types/User";
import { Button } from "antd";
import { PaginationDiv } from "../Pagination";
import { Checkbox } from "antd";
import {
  DetailButton,
  UserSearchDiv,
  UserSendButton,
  UserSendButtonDiv,
  UserTableDiv,
  UserTableElement,
  UserTableItem,
  UserTableTitle,
} from "../../cssJs/userTableCss";
import { Loading, LoadingDiv } from "../../cssJs/publicCss";
import EmailEditModel from "../ProfileManagement/EmailEditModel";
import InputBox from "../InputBox";
import { InputBoxType } from "../../types/EnumTypes";
import { SelectValue } from "antd/lib/select";

const UsersTable = (): JSX.Element => {
  const pageSize = 10;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[] | null>([]);
  const [emails, setEmails] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [update, setUpdate] = useState(0);
  const [firstName, setUserFirstName] = useState("");
  const [lastName, setUserLastName] = useState("");
  const [volunteer, setVolunteer] = useState("All");

  useEffect(() => {
    (async function anyNameFunction() {
      setLoading(true);
      await getUsers("", "");
      setLoading(false);
    })();
  }, [page]);

  useEffect(() => {
    const newArr: string[] = [];
    if (selectAll) {
      users?.forEach((user) => {
        newArr.push(user.userEmail);
      });
    }
    setEmails(newArr);
  }, [selectAll, users]);

  useEffect(() => {
    //console.log(emails);
  }, [emails]);

  const childrenRef: React.MutableRefObject<{ popUp: () => void }> =
    useRef() as React.MutableRefObject<{ popUp: () => void }>;

  const getUsers = async (firstName: string, lastName: string) => {
    setLoading(true);
    //get all plate
    const users: User[] | null = await userQuery(
      firstName,
      lastName,
      volunteer,
      page,
      pageSize
    );
    setUsers(users);
    setLoading(false);
  };

  const newPage = async (page: number) => setPage(page);

  const emailCheck = (email: string) => {
    const newArr = emails.map((email) => email);
    const index = newArr.indexOf(email);
    index == -1 ? newArr.push(email) : newArr.splice(index, 1);
    setEmails(newArr);
    setUpdate(update + 1);
  };

  const checked = (email: string) => {
    const index = emails.indexOf(email);
    return index == -1;
  };

  const selectAllFn = () => {
    setSelectAll(!selectAll);
  };

  const Edit = () => {
    childrenRef.current.popUp();
  };

  const getVolunteerString = (volunteer: VolunteerType) => {
    switch (volunteer) {
      case VolunteerType.true:
        return "Yes";
      case VolunteerType.false:
        return "No";
      case VolunteerType.apply:
        return "applying";
    }
  };

  const getUsersTable = () =>
    (users as User[]).map((user, index) => (
      <UserTableElement key={index}>
        <UserTableItem>{user.firstName}</UserTableItem>
        <UserTableItem>{user.lastName}</UserTableItem>
        <UserTableItem>{user.userEmail}</UserTableItem>
        <UserTableItem>{getVolunteerString(user.volunteer)}</UserTableItem>
        <Checkbox
          checked={!checked(user.userEmail)}
          onChange={() => emailCheck(user.userEmail)}
        >
          email
        </Checkbox>
      </UserTableElement>
    ));

  //<DetailButton onClick={() => showDetail(user)}>details</DetailButton>

  const onChange = (e: React.ChangeEvent<Element>): void => {
    const type = (e.target as HTMLInputElement).placeholder;
    switch (type) {
      case "First Name":
        setUserFirstName((e.target as HTMLInputElement).value);
        break;
      case "Last Name":
        setUserLastName((e.target as HTMLInputElement).value);
        break;
    }
  };

  const onSelectChange = (e: SelectValue): void => {
    setVolunteer(e?.toString() as string);
  };

  const getTable = () => {
    if (loading) {
      return (
        <LoadingDiv>
          <Loading />
        </LoadingDiv>
      );
    } else {
      return (
        <>
          <UserSendButtonDiv>
            <UserSendButton onClick={Edit}>Send Emails</UserSendButton>
          </UserSendButtonDiv>
          <UserTableTitle>
            <UserTableItem>
              <h6>First Name</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>Last Name</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>Email</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>Volunteer</h6>
            </UserTableItem>
            <Checkbox checked={selectAll} onChange={() => selectAllFn()}>
              Select All
            </Checkbox>
          </UserTableTitle>
          {getUsersTable()}
          <PaginationDiv pageSize={pageSize} propFn={newPage} count={2} />
        </>
      );
    }
  };

  return (
    <UserTableDiv>
      <UserSearchDiv>
        <InputBox
          Title="First Name"
          onChange={onChange}
          type={InputBoxType.INPUT}
          value={firstName}
        />
        <InputBox
          Title="Last Name"
          onChange={onChange}
          type={InputBoxType.INPUT}
          value={lastName}
        />
        <InputBox
          Title="Volunteer"
          onSelectChange={onSelectChange}
          type={InputBoxType.SELECT}
          options={[
            "All",
            VolunteerType.true,
            VolunteerType.false,
            VolunteerType.apply,
          ]}
        />
        <Button
          onClick={() => {
            getUsers(firstName, lastName);
          }}
        >
          Search
        </Button>
      </UserSearchDiv>
      {getTable()}
      <EmailEditModel childRef={childrenRef} emails={emails} />
    </UserTableDiv>
  );
};

export default UsersTable;
