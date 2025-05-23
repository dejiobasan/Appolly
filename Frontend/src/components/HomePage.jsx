import Hero from "./sections/Hero";
import About from "./sections/About";
import AppFeatures from "./sections/AppFeatures";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <AppFeatures/>
    </div>
  );
};

export default HomePage;
