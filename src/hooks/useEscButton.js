import React from "react";

const useEscButton = (onButtonPress) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onButtonPress();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onButtonPress]);
  return null;
};

export default useEscButton;
