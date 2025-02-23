import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertiesContainer } from "@/components/PropertiesContainer";
import { Services } from "@/components/Services";
import { TransitionPage } from "@/components/TransitionPage";
//import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <TransitionPage />
      <Header />
      <main className="mx-auto max-w-screen-xl md:mt-[70px]">
        <Banner />
        <PropertiesContainer />
        <div className="mx-auto">
          <Services />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
