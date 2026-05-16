import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ padding: "clamp(16px, 4vw, 48px)" }}>
      <div className="text-center w-full" style={{ maxWidth: "min(480px, 100%)" }}>
        <h1 className="font-bold mb-3" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>404</h1>
        <p className="text-gray-600 mb-4" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
