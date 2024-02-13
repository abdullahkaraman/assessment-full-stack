import "./App.css";
import { Input } from "./components/ui/input";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "./components/error-fallback";

// const LazyComponent = lazy(() => (
//   <div>
//     <h1>Lazy loaded component</h1>
//   </div>
// ));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input className={"mt-4 text-md"} placeholder={"Search"} />
      </header>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary> */}
    </div>
  );
}

export default App;
