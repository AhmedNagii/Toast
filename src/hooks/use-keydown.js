import React from "react";

const useKeydown = (key, callBack) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callBack]);
  return null;
};

export default useKeydown;
