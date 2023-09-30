import React from "react";
import { createRoot } from "react-dom/client";
import { UserInfo } from "./components";
const div = document.getElementById("root");
const root = createRoot(div);
const App = () => {
  return <UserInfo />;
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
