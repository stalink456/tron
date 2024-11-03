import React, { useMemo } from "react";
import type { WalletError } from "@tronweb3/tronwallet-abstract-adapter";
import {
  WalletConnectionError,
  WalletDisconnectedError,
  WalletNotFoundError,
} from "@tronweb3/tronwallet-abstract-adapter";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";
import {
  WalletActionButton,
  WalletModalProvider,
} from "@tronweb3/tronwallet-adapter-react-ui";
import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";

import toast from "react-hot-toast";
import Profile from "./components/Profile";

export function App() {
  const onError = (error: WalletError) => {
    if (error instanceof WalletNotFoundError) {
      toast.error(error.message);
    } else if (error instanceof WalletDisconnectedError) {
      toast.error(error.message);
    } else if (error instanceof WalletConnectionError) {
      toast.error(error.message);
    } else toast.error(error.message);
  };

  const adapters = useMemo(() => {
    const tronLinkAdapter = new TronLinkAdapter();

    return [tronLinkAdapter];
  }, []);

  return (
    <WalletProvider
      onError={onError}
      disableAutoConnectOnLoad={true}
      adapters={adapters}
    >
      <WalletModalProvider>
        <WalletActionButton icon="" />
        <Profile />
      </WalletModalProvider>
    </WalletProvider>
  );
}
