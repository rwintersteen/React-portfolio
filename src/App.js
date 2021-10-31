import React from "react";
import "./App.css";
import Header from "./components/header";
import NavTabs from "./components/navTabs";
import Footer from "./components/footer";

function App() {
  return (
      <div className="App">
        <Header />
        <NavTabs />
        <Footer />
      </div>
  );
}

export default App;
