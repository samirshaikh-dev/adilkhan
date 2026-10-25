import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import EducationSection from "../components/sections/EducationSection";
import ProfileSection from "../components/sections/ProfileSection";
import InterestsSection from "../components/sections/InterestsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <HeroSection />
        <AchievementsSection />
        <EducationSection />
        <ProfileSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
