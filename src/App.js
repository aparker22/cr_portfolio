import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./content/Home";
import { Footer } from "./footer/Footer";
import Photo from "./photo/Photo";
import { Skills } from "./content/Skills";
import { Personal } from "./content/Personal";
import { Experiences } from "./content/Experiences";
import { Header } from "./header/Header";
import stylesheet from "./App.css"

function App() {
  return (
    <Router className="App">
      <div className="App">
        <Header></Header>
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/personal" component={Personal} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/skills" exact component={Skills} />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;
