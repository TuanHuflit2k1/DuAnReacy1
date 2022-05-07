import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/Skill";
import Wrapper from "./components/Wrapper";
import Branding from "./components/Branding";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Wrapper />
      <Branding />
      <Testimonials />
      <Blog />
      <Work />
      <Footer />
    </>
  );
};

export default App;
