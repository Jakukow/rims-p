import Hero from "./components/Hero";

import Model from "./components/Model";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Model />
    </main>
  );
};

export default App;
