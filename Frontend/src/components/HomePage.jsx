import Hero from "./sections/Hero";
import About from "./sections/About";
import AppFeatures from "./sections/AppFeatures";
import AppInterface from "./sections/AppInterface";
import Usage from "./sections/Usage";
import Team from "./sections/Team";
import HappyCustomer from "./sections/HappyCustomer";
import BlogSection from "./sections/BlogSection";
import Footer from "./sections/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <AppFeatures />
      <AppInterface />
      <Usage />
      <Team />
      <HappyCustomer />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
