import moment from "moment";

export const getTimeString = (time: Date) => {
  const newTime = new Date(time);
  return `${newTime.getFullYear()}-${
    newTime.getMonth() + 1
  }-${newTime.getDate()}`;
};

export const getMomentDate = (date: Date) => {
  if (date) {
    const newDate = new Date(date);
    return moment()
      .set("year", newDate.getFullYear() as number)
      .set("month", newDate.getMonth() as number)
      .set("date", newDate.getDate() as number);
  } else {
    return moment().set("year", 1900).set("month", 0).set("day", 1);
  }
};
