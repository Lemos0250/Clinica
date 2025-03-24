import { About } from "@/components/about";
import { Area } from "@/components/area";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home";

export default function Home() {
  return (
    <main>
      <Header/>
      <Area/>
      <HomePage/>
      <About/>
    </main>
  );
}
