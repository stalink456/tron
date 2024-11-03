import React, { useState } from "react";

import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { tronWeb } from "../../utils/tronweb";
import { Button } from "@tronweb3/tronwallet-adapter-react-ui";

const Sign = () => {
  const { signMessage, signTransaction, address } = useWallet();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const receiver = "TMDKznuDWaZwfZHcM61FVFstyYNmK6Njk1";
  const [open, setOpen] = useState(false);

  async function onSignMessage() {
    const res = await signMessage(message);
    setSignedMessage(res);
  }

  async function onSignTransaction() {
    const transaction = await tronWeb.transactionBuilder.sendTrx(
      receiver,
      tronWeb.toSun(0.001),
      address
    );

    const signedTransaction = await signTransaction(transaction);
    // const signedTransaction = await tronWeb.trx.sign(transaction);
    await tronWeb.trx.sendRawTransaction(signedTransaction);
    setOpen(true);
  }
  return (
    <div style={{ marginBottom: 200 }}>
      <h2>Sign a message</h2>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          wordBreak: "break-all",
        }}
      >
        You can sign a message by click the button.
      </p>
      <Button style={{ marginRight: "20px" }} onClick={onSignMessage}>
        SignMessage
      </Button>
      {/* <TextField
        size="small"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="input message to signed"
      ></TextField> */}
      <p>Your sigedMessage is: {signedMessage}</p>
      <h2>Sign a Transaction</h2>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          wordBreak: "break-all",
        }}
      >
        You can transfer 0.001 Trx to &nbsp;<i>{receiver}</i>&nbsp;by click the
        button.
      </p>
      <Button onClick={onSignTransaction}>Transfer</Button>
      {/* {open && (
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%", marginTop: 1 }}
        >
          Success! You can confirm your transfer on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://nile.tronscan.org/#/address/${address}`}
          >
            Tron Scan
          </a>
        </Alert>
      )} */}
    </div>
  );
};

export default Sign;
