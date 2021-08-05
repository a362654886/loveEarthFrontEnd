import { EventType } from "./EventType";

export type User = {
  _id: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  address: string;
  birthday: Date;
  password: string;
  admin: boolean;
  volunteer: VolunteerType;
  hours?: number[];
  events?: EventType[];
  editHour?: boolean; 
};

export enum Gender {
  male = "male",
  female = "female",
}

export enum VolunteerType {
  true = "true",
  apply = "apply",
  false = "false",
}
