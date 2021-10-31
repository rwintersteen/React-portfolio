import React from "react";
import Header from "./components/header";
import About from "./pages/aboutMe";
import Projects from "./pages/projects";
import Resume from "./components/downloadResume";
import Footer from "./components/footer";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Rachael Wintersteen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/about' },
        { title: 'Contact Me', path: '/contact' }
      ],
      home: {
        title: 'Rachael Wintersteen',
        subTitle: 'Projects the make a difference',
        text: 'Please take a peek at the projects I have completed during the course of my coding bootcamp experience.'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: ''
      }
    }
  }


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
