import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";

function App() {
  return <main className="relative min-h-screen w-screen overflow-x-hidden">
    <NavBar/>
    <Hero></Hero>
    <About/>
    <Features/>
    <Story/>
    <Contact/>
  </main>;
}

export default App;
