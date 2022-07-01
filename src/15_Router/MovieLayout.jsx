import React from "react";
import { Outlet } from "react-router-dom";

const MovieLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-secondary">
      <h1 className="text-center text-warning">Cybersoft Movie</h1>

      {/* Child Route sẽ được render tại vị trí ta đặt component Outlet */}
      <Outlet />
    </div>
  );
};

export default MovieLayout;
