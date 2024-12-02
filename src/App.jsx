import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import ErrorBanner from "./ErrorBanner";
import ErrorProvoker from "./ErrorProvoker";
import { setupGlobalErrorHandlers } from "./globalErrorHandling";

setupGlobalErrorHandlers();

function App() {
  const [errorMessage, setErrorMessage] = useState(null); // Track error messages
  const [showRenderError, setShowRenderError] = useState(false); // Trigger render error


  return (
    <div>
      <ErrorBanner errorMessage={errorMessage} />
      <ErrorProvoker setErrorMessage={setErrorMessage} setShowRenderError={setShowRenderError} />

      <Outlet context={{showRenderError}}/>
    </div>
  );
}

export default App;
