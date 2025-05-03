// src/components/ErrorBoundary.tsx
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="alert alert-danger mt-4">
        <h2>Error {error.status}</h2>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div className="alert alert-danger mt-4">
      <h2>Something went wrong.</h2>
      <p>{(error as Error)?.message ?? "Unknown error occurred."}</p>
    </div>
  );
}
