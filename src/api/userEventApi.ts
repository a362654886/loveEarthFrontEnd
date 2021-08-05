import Axios from "axios";
import { backEndLink } from "../globalValues";
import { UserEventType } from "../types/EventType";

const basicURL = backEndLink;

export const userEventAdd = async (
  userEvent: UserEventType
): Promise<UserEventType | null> => {
  const endpoint = basicURL + "userEventInsert";
  return Axios.post(endpoint, {
    eventBody: userEvent,
  })
    .then((response) => {
      const userEvent: UserEventType = response.data.ops[0];
      return userEvent;
    })
    .catch(() => {
      return null;
    });
};

export const userEventQuery = async (
  userId: string,
  page: number,
  pageSize: number
): Promise<UserEventType[] | null> => {
  const endpoint =
    basicURL +
    `userEventQuery?userId=${userId}&page=${page}&pageSize=${pageSize}`;
  return Axios.get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};

export const userEventUpdate = async (
  userEvent: UserEventType
): Promise<UserEventType[] | null> => {
  const endpoint = basicURL + `userEventUpdate`;
  return Axios.put(endpoint, {
    userEvent: userEvent,
  })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};
