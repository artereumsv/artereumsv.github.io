// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { App as AntdApp } from "antd";
import App from "./App";
import "./index.css";

import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AntdApp>
      <App />
    </AntdApp>
  </React.StrictMode>
);
