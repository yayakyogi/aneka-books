import { getData, storeData } from "./localStorage";

export const GetBalance = () => {
  const getbalance = getData("balances");
  let balance = 0;
  if (getbalance === null) {
    storeData("balances", 100000);
    balance = getData("balances");
  } else {
    balance = getData("balances");
  }
  return balance;
};
