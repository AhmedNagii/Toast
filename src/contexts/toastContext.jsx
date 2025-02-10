import React from "react";
import { createId } from "crypto-id";
import useKeydown from "../hooks/use-keydown.js";
export const ToastContext = React.createContext();

function ToastContextProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const pushNewToast = (toast) => {
    setToastList((currentState) => {
      return [...currentState, { ...toast, id: createId() }];
    });
  };
  const removeToast = (toastId) => {
    setToastList((currentState) => {
      return currentState.filter((t) => t.id !== toastId);
    });
  };

  useKeydown("Escape", () => {
    setToastList([]);
  });


  const value = { toastList, pushNewToast, removeToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default React.memo(ToastContextProvider);
