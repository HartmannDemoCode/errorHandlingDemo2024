import { useOutletContext } from "react-router-dom";

// A component that throws a React render error
function ErrorThrowingComponent() {
  throw new Error("Our custom error occurred in the React component!");
}
const Content = () => {
  const { showRenderError } = useOutletContext();
  console.log(showRenderError);
  return (
    <div>
      <h1>Content</h1>
      {showRenderError}
      {/* Provoke the React render error */}
      {showRenderError && <ErrorThrowingComponent />}


    </div>
  );
}

export default Content;