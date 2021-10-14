import React from "react";
import Header from "./components/navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/downloadResume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
