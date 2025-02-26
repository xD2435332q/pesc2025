import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/admin";
import LandingPage from "./components/public/LandingPage";
import PropertyDetails from "./components/public/PropertyDetails";
import SearchResults from "./components/public/SearchResults";
import routes from "tempo-routes";

function App() {
  console.log('AAAA')
  console.log(import.meta.env.VITE_TEMPO);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/search" element={<SearchResults />} />
                    <Route path="/admin" element={<AdminRoutes />} />

        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
