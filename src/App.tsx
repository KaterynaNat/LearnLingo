import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";



const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));

const App = (): JSX.Element => {
  return (

      <Routes>

          <Route index element={<HomePage />} />

        </Route>
      </Routes>
  );
};

export default App;
