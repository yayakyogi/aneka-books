import { getData } from "./localStorage";

export const cekDuplicateBook = (title) => {
  // get data payments from localStorage
  const dataPayments = getData("payments");
  // initialize data array
  const data = [];
  // change object dataPayments to array and push to data
  dataPayments !== null &&
    Object.keys(dataPayments).map((key) => {
      return data.push({
        id: key,
        ...dataPayments[key],
      });
    });

  return data.find((data) => data.title === title);
};
