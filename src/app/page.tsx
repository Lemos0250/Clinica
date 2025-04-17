import { About } from "@/components/about";
import { Area } from "@/components/area";
import { Brands } from "@/components/brands";
import { Comments } from "@/components/comments";
import { Contact } from "@/components/contacts";
import { End } from "@/components/end";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="gap-">
      <Header/>
      <Area/>
      <HomePage/>
      <About/>
      <Services/>
      <Brands/>
      <Comments/>
      <Contact/>
      <End/>
      <Footer/>
    </main>
  );
}
