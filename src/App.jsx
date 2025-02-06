import Hero from "./components/Hero/HEro";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default App;