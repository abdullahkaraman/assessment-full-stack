import "./App.css";
// import PostItem from "./PostItem";
import { Input } from "./components/ui/input";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-fallback";

const LazyComponent = lazy(() => import("./PostItem"));

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="container w-full lg:w-full pb-4">
        <Input className={"mt-4 text-md"} placeholder={"Search"} />
      </header>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="container">
            <div
              className={
                "columns—l sm:columns-2 md:columns-3 lg:columns-4 gap—2"
              }
            >
              <LazyComponent />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
