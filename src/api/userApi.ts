import { User } from "../types/User";
import Axios from "axios";
import { setToken } from "../helperFns/tokenFn";
import { backEndLink } from "../globalValues";

const basicURL = backEndLink;

export const userAuth = async (
  email: string,
  password: string
): Promise<User | null> => {
  const endpoint = basicURL + "userAuth";
  return Axios.post(endpoint, {
    userEmail: email,
    userPassword: password,
  })
    .then((response) => {
      if (response.data.user != null) {
        setToken(response.data.token);
      }
      const user = response.data?.user;
      return user;
    })
    .catch(() => {
      return null;
    });
};

export const userAdd = async (newUser: User): Promise<User | null> => {
  const endpoint = basicURL + "userInsert";
  return Axios.post(endpoint, {
    user: newUser,
  })
    .then((response) => {
      const user: User = response.data.ops[0];
      return user;
    })
    .catch((e: any) => {
      console.log(e);
      return null;
    });
};

export const userUpdate = async (updateUser: User): Promise<string | null> => {
  const endpoint = basicURL + "userUpdate";
  return Axios.put(endpoint, {
    user: updateUser,
  })
    .then(() => {
      return "success";
    })
    .catch(() => {
      return null;
    });
};

export const userVolunteerUpdate = async (
  email: string,
  volunteer: string
): Promise<string | null> => {
  const endpoint = basicURL + "userVolunteerUpdate";
  return Axios.put(endpoint, {
    email: email,
    volunteer: volunteer,
  })
    .then(() => {
      return "success";
    })
    .catch(() => {
      return null;
    });
};

export const userQuery = async (
  firstName: string,
  lastName: string,
  volunteer: string,
  page: number,
  pageSize: number
): Promise<User[] | null> => {
  const endpoint =
    basicURL +
    `userQuery?firstName=${firstName}&lastName=${lastName}&volunteer=${volunteer}&page=${page}&pageSize=${pageSize}`;
  return Axios.get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};

export const userGetEventQuery = async (
  userId: string,
  page: number,
  pageSize: number
): Promise<User[] | null> => {
  const endpoint =
    basicURL +
    `userGetWithEvent?userId=${userId}&page=${page}&pageSize=${pageSize}`;
  return Axios.get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};