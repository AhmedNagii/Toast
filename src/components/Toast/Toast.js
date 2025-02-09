import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../../contexts/toastContext.jsx";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const TOAST_DURATION = 5000;

function Toast({ type, children, id }) {
  const { removeToast } = React.useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[type];
  const cssClass = styles[type];

  React.useEffect(() => {
    const removeToastTime = setTimeout(() => {
      removeToast(id);
    }, TOAST_DURATION);

    return () => {
      clearTimeout(removeToastTime);
    };
  }, []);

  return (
    <div key={id} className={`${styles.toast} ${cssClass}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => {
          removeToast(id);
        }}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
