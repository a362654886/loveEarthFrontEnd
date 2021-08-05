import * as React from "react";
import { useEffect, useState } from "react";
import { userQuery, userVolunteerUpdate } from "../../api/userApi";
import { User, VolunteerType } from "../../types/User";
import { PaginationDiv } from "../Pagination";
import {
  DetailButton,
  UserTableDiv,
  UserTableElement,
  UserTableItem,
  UserTableTitle,
} from "../../cssJs/userTableCss";
import { Loading, LoadingDiv } from "../../cssJs/publicCss";

const VolunteerApply = (): JSX.Element => {
  const pageSize = 10;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    (async function anyNameFunction() {
      setLoading(true);
      await getUsers();
      setLoading(false);
    })();
  }, [page]);

  const getUsers = async () => {
    setLoading(true);
    //get all plate
    const users: User[] | null = await userQuery(
      "",
      "",
      VolunteerType.apply,
      page,
      pageSize
    );
    setUsers(users);
    setLoading(false);
  };

  const approve = async (user: User) => {
    setLoading(true);
    const updateResult = await userVolunteerUpdate(
      user?.userEmail as string,
      VolunteerType.true
    );
    await getUsers();
    setLoading(false);
  };

  const deny = async (user: User) => {
    setLoading(true);
    const updateResult = await userVolunteerUpdate(
      user?.userEmail as string,
      VolunteerType.false
    );
    await getUsers();
    setLoading(false);
  };

  const newPage = async (page: number) => setPage(page);

  const getUsersTable = () =>
    (users as User[]).map((user, index) => (
      <UserTableElement key={index}>
        <UserTableItem>{user.firstName}</UserTableItem>
        <UserTableItem>{user.lastName}</UserTableItem>
        <UserTableItem>{user.userEmail}</UserTableItem>
        <DetailButton onClick={() => approve(user)}>approve</DetailButton>
        <DetailButton onClick={() => deny(user)}>deny</DetailButton>
      </UserTableElement>
    ));

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
              <h6>Apply State</h6>
            </UserTableItem>
          </UserTableTitle>
          {getUsersTable()}
          <PaginationDiv pageSize={pageSize} propFn={newPage} count={2} />
        </>
      );
    }
  };

  return <UserTableDiv>{getTable()}</UserTableDiv>;
};

export default VolunteerApply;
