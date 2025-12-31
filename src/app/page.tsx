import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import Numbers from "@/components/home/Numbers";
import Options from "@/components/home/Options";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Reviews />
      <Numbers />
      <Options />
    </main>
  );
}
