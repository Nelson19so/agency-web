import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Web from "./Web.tsx";

createRoot(document.getElementById("root_directory")!).render(
  <StrictMode>
    <Web />
  </StrictMode>
);
