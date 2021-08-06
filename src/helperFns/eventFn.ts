import { User } from "../types/User";

export const ifUserExist = (
  userArr: User[][] | undefined,
  userId: string | undefined
) => {
  let result = false;
  if (userArr && userId) {
    userArr.forEach((user) => {
      if (user[0] && user[0]._id == userId) {
        result = true;
      }
    });
  }
  return result;
};
