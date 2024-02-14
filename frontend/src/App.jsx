import "./App.css";
import Loading from "./components/loading";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { lazy, Suspense } from "react";
import { useState } from "react";

const LazyComponent = lazy(() => import("./PostItem"));

function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="container w-full lg:w-full pb-4">
        <Input
          className={"mt-4 text-md"}
          placeholder={"Search"}
          onChange={(event) => {
            if (event.target.value.length > 2) {
              setSearchQuery(event.target.value.toString());
            }
          }}
        />
      </header>
      <Suspense fallback={<Loading />}>
        <div className="container">
          <div
            className={"columns—l sm:columns-2 md:columns-3 lg:columns-4 gap—2"}
          >
            <LazyComponent page={page} searchQuery={searchQuery} />
          </div>
        </div>
      </Suspense>
      <div className="container w-full lg:w-full flex justify-center items-center">
        <Button
          className={"mt-4"}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default App;
