import React from "react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center" style={{ padding: "clamp(16px, 4vw, 48px)" }}>
      <div className="text-center w-full" style={{ maxWidth: "min(600px, 100%)" }}>
        <h1 className="font-bold text-gray-900 mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Analytics</h1>
        <p className="text-gray-600" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}>Analytics functionality is currently disabled</p>
      </div>
    </div>
  );
};

export default Analytics;