import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Ingredient from "./components/Ingredient";
import OurBlogs from "./components/OurBlogs";

export default function Home() {
  return (
    <div className="bg-white w-[1943px] h-[3579px]">
      <Header />
      <HeroSection />
      <Feature />
      <Ingredient />
      <OurBlogs />
      <Footer />
    </div>
  );
}
