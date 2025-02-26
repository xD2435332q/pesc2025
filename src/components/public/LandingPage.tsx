import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function LandingPage() {
  console.log("asdasd");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Testimonials />
      <Footer />
    </div>
  );
}
