import Hero from "./components/Hero";
import HIghlights from "./components/HIghlights";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HIghlights />
    </main>
  );
};

export default App;
