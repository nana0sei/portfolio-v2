import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import error from "../assets/error.png";

const ErrorPage = () => {
  const errorType = useRouteError();

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <img src={error} width="500px" />
        <div>
          {isRouteErrorResponse(errorType)
            ? "page not found"
            : "an unexpected error occurred"}
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
