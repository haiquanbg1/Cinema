import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";



import DefaultLayout from "~/components/Layout/DefaultLayout";
import RegisterLayout from '~/components/Layout/RegisterLayout';
import TicketLayout from "./components/Layout/TicketLayout";
import CinemaLayout from "./components/Layout/CinemaLayout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === 'registerLayout' ? RegisterLayout : route.layout === 'getTicketLayout' ? TicketLayout : route.layout === 'cinemaLayout' ? CinemaLayout : DefaultLayout
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
