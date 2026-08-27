import { useLocation } from "react-router-dom";

export default function RouteProgress() {
  const location = useLocation();
  return <div className="route-progress" key={location.pathname} aria-hidden="true" />;
}
