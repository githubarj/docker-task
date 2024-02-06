import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";

const routes = createBrowserRouter(
  createRoutesFromElements(<Route element={<LandingPage />} path="/"></Route>)
);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
