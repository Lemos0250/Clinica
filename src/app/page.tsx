import { About } from "@/components/about";
import { Area } from "@/components/area";
import { Brands } from "@/components/brands";
import { Comments } from "@/components/comments";
import { Contact } from "@/components/contacts";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home";

export default function Home() {
  return (
    <main className="gap-">
      <Header/>
      <Area/>
      <HomePage/>
      <About/>
      <Brands/>
      <Comments/>
      <Contact/>
    </main>
  );
}
