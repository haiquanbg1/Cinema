import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";



import DefaultLayout from "~/components/Layout/DefaultLayout";
import RegisterLayout from '~/components/Layout/RegisterLayout';
import TicketLayout from "./components/Layout/TicketLayout";
import CinemaLayout from "./components/Layout/CinemaLayout";
import AdminLayout from "./components/Layout/AdminLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === 'registerLayout' ? RegisterLayout : route.layout === 'getTicketLayout' ? TicketLayout : route.layout === 'cinemaLayout' ? CinemaLayout : route.layout === 'adminLayout' ? AdminLayout : DefaultLayout
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>}
              />
            );
          })}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
