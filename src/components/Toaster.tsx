import React from "react";
import { Toaster as SonnerToaster } from "sonner";
import "./Toaster.css";

const Toaster: React.FC = () => {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        duration: 2500,
        className: "custom-toast",
      }}
    />
  );
};

export default Toaster;
