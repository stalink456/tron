import { tronWeb } from "./tronweb";

export const getBalance = async (address) => {
  try {
    const balance = await tronWeb.trx.getBalance(address);
    return tronWeb.fromSun(balance);
  } catch (error) {
    console.error("Error fetching balance:", error);
    return "0";
  }
};
