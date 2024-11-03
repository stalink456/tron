import React, { useEffect, useState } from "react";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { getBalance } from "../../utils/getBalance";

const Profile = () => {
  const [balance, setBalance] = useState(0);
  const { address, connected, wallet } = useWallet();

  const fetchBalances = async () => {
    const checkBalance = await getBalance(address);

    setBalance(checkBalance);
  };

  useEffect(() => {
    if (!connected) return;

    fetchBalances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return (
    <div>
      <h2>Wallet Connection Info</h2>
      <p>
        <span>Connection Status:</span>{" "}
        {connected ? "Connected" : "Disconnected"}
      </p>
      <p>
        <span>Your selected Wallet:</span> {wallet?.adapter.name}
      </p>
      <p>
        <span>Your Address:</span> {address}
      </p>

      {Boolean(balance) && (
        <p>
          <span>My Groshies:</span> {balance} TRX
        </p>
      )}
    </div>
  );
};

export default Profile;
