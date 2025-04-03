import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OurTeam } from "@/components/OurTeam";
import { PropertiesContainer } from "@/components/PropertiesContainer";
import { TransitionPage } from "@/components/TransitionPage";

export default function Home() {
  return (
    <>
      <TransitionPage />
      <Header />
      <main className="mx-auto max-w-(--breakpoint-xl) md:mt-[70px]">
        <Banner />
        <PropertiesContainer />
        <div className="mx-auto">
          <About />
        </div>
      </main>
      <OurTeam />
      <ContactSection />
      <Footer />
    </>
  );
}
