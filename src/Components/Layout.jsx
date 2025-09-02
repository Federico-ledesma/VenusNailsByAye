import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PantallaCarga from "./PantallaCarga";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1 segundo
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <PantallaCarga loading={loading} /> : children;
}

export default Layout;