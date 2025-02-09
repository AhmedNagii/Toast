import React from "react";
import { createId } from "crypto-id";
import useEscButton from "../hooks/useEscButton.js";
export const ToastContext = React.createContext();

function ToastContextProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const pushNewToast = (toast) => {
    setToastList((currentState) => {
      return [{ ...toast, id: createId() }, ...currentState];
    });
  };
  const removeToast = (toastId) => {
    setToastList((currentState) => {
      return currentState.filter((t) => t.id !== toastId);
    });
  };

  useEscButton(() => {
    setToastList([]);
  });

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        debugger;
        setToastList([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const value = { toastList, pushNewToast, removeToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default React.memo(ToastContextProvider);
