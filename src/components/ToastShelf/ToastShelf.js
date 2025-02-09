import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../../contexts/toastContext.jsx";

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toastList.map(({ message, type, id }) => {
        return (
          <Toast key={id} id={id} type={type}>
            {message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
