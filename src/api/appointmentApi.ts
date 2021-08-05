import { AppointmentType } from "../types/AppointmentType";
import Axios from "axios";
import { backEndLink } from "../globalValues";

const basicURL = backEndLink;

export const appointmentAdd = async (
  newAppointment: AppointmentType
): Promise<AppointmentType | null> => {
  const endpoint = basicURL + "appointmentInsert";
  return Axios.post(endpoint, {
    appointment: newAppointment,
  })
    .then((response) => {
      const appointment: AppointmentType = response.data.ops[0];
      return appointment;
    })
    .catch(() => {
      return null;
    });
};
