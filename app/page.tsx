import Navbar from "@/components/Navbar";
import RegisterBanner from "@/components/RegisterBanner";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Theme from "@/components/Theme";
import Speakers from "@/components/Speakers";
import Event from "@/components/Event";
import Team from "@/components/Team";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <RegisterBanner />
      <Countdown />
      <Hero />
      <Theme />
      <Speakers />
      <Event />
      <Experience />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
