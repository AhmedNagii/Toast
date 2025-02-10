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
          <li className={styles.toastWrapper}>
            <Toast key={id} id={id} type={type}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
