import Hero from "./sections/Hero";
import About from "./sections/About";
import AppFeatures from "./sections/AppFeatures";
import AppInterface from "./sections/AppInterface";
import Usage from "./sections/Usage";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <AppFeatures />
      <AppInterface />
      <Usage />
    </div>
  );
};

export default HomePage;
