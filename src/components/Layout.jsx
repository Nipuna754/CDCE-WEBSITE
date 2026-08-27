import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouteProgress from "./RouteProgress";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <RouteProgress />
      <Header />
      <main key={location.pathname} className="route-fade">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
