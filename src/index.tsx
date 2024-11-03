import React from "react";
import ReactDOM from "react-dom/client";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";
import { App } from "./App";

import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <App />
    <Toaster />
  </ErrorBoundary>
);
