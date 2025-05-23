import Hero from "./sections/Hero";
import About from "./sections/About";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
