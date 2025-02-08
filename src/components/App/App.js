import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastContextProvider from "../../contexts/toastContext.jsx";

function App() {
  return (
    <ToastContextProvider>
      <ToastPlayground />
      <Footer />
    </ToastContextProvider>
  );
}

export default App;
