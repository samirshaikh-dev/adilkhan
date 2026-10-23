import AboutSection from "../components/sections/AboutSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import HeroSection from "../components/sections/HeroSection";
import InterestsSection from "../components/sections/InterestsSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import BackToTop from "../components/ui/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#263b53]" id="top">
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <AchievementsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
