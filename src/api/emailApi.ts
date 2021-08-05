import { User } from "../types/User";
import Axios from "axios";
import { setToken } from "../helperFns/tokenFn";
import { backEndLink } from "../globalValues";

const basicURL = backEndLink;

export const emailAdd = async (
  fromEmail: string,
  subject: string,
  toEmail: string[],
  message: string
): Promise<void> => {
  const endpoint = basicURL + "emailPost";
  return Axios.post(endpoint, {
    fromEmail: fromEmail,
    toEmail: toEmail,
    subject: subject,
    message: message,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((e: any) => {
      console.log(e);
    });
};
