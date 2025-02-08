import React from "react";
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../../contexts/toastContext.jsx";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [textAreaVal, setTextAreaVal] = React.useState("");
  const { pushNewToast } = React.useContext(ToastContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTextAreaVal("")
        pushNewToast({
          type: selectedVariant,
          message: textAreaVal,
        });
      }}
      className={styles.wrapper}
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={textAreaVal}
              onChange={(e) => {
                setTextAreaVal(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((op) => {
              const id = `variant-${op}`;
              return (
                <label key={op} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    checked={selectedVariant === op}
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(op)}
                  />
                  {op}
                </label>
              );
            })}
            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
