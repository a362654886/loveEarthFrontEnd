import Axios from "axios";
import { backEndLink } from "../globalValues";
import { EventType } from "../types/EventType";

const basicURL = backEndLink;

export const eventAdd = async (
  event: EventType
): Promise<EventType | null> => {
  const endpoint = basicURL + "eventInsert";
  return Axios.post(endpoint, {
    eventBody: event,
  })
    .then((response) => {
      const volunteer: EventType = response.data.ops[0];
      return volunteer;
    })
    .catch(() => {
      return null;
    });
};

export const eventQuery = async (
  page: number,
  pageSize: number
): Promise<EventType[] | null> => {
  const endpoint = basicURL + `eventsQuery?page=${page}&pageSize=${pageSize}`;
  return Axios.get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};
