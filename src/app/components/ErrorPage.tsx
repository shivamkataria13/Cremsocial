import { useRouteError, isRouteErrorResponse } from "react-router";
import { Link } from "react-router";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-50 font-sans">
      <h1 className="text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Oops!</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, an unexpected error has occurred.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full mb-8 text-left border border-gray-200">
         <p className="font-mono text-sm text-red-600 break-words whitespace-pre-wrap">
           {errorMessage}
         </p>
      </div>
      
      <Link 
        to="/" 
        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all hover:scale-105"
      >
        Go back to Home
      </Link>
    </div>
  );
}
