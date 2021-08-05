import Axios from "axios";
import { backEndLink } from "../globalValues";
import { VolunteerType } from "../types/VolunteerType";

const basicURL = backEndLink;

export const volunteerAdd = async (
  newVolunteer: VolunteerType
): Promise<VolunteerType | null> => {
  const endpoint = basicURL + "volunteerInsert";
  return Axios.post(endpoint, {
    volunteer: newVolunteer,
  })
    .then((response) => {
      const volunteer: VolunteerType = response.data.ops[0];
      return volunteer;
    })
    .catch(() => {
      return null;
    });
};
