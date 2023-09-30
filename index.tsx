import React from "react";
import { createRoot } from "react-dom/client";
import { UserInfo } from "./src/components";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserInfo />
  </React.StrictMode>
);
