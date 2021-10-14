import React from "react";
import Header from "./components/header";
import About from "./pages/aboutMe";
import Projects from "./pages/projects";
import Resume from "./components/downloadResume";
import Footer from "./components/footer";

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
