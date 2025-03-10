import React from "react";
import Router from "./util/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Header />
        <Router />
      <Footer />
    </div>
  );
}
