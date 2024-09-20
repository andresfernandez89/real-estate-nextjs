"use client";
import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Properties } from "@/components/Properties";
import { Services } from "@/components/Services";
import { TransitionPage } from "@/components/TransitionPage";
import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import("../components/Location").then((module) => module.Location),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <TransitionPage />
      <Header />
      <main className="mx-auto mt-[70px] max-w-screen-xl">
        <Banner />
        <Properties />
        <div className="mx-auto">
          <Services />
          <LocationMap />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
