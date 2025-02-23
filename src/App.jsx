import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/myWork/MyWork";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MyWork></MyWork>
      <Contact></Contact>
    </div>
  );
};

export default App;