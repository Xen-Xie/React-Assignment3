// src/Components/Layout.jsx
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    document.body.style.overflow = focused ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [focused]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <NavBar focused={focused} setFocused={setFocused} />

      {/* Faded Overlay */}
      {focused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 top-[70px] sm:top-[80px]"
          onClick={() => setFocused(false)}
        />
      )}

      <main className="flex-grow relative z-30">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
