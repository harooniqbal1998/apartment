import Header from "./Header";
import Body from "./Body";
import Contact from "@/components/Contact/Contact";
import Details from "./Details";
import About from "./About";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Body />
      <Details />
      <About />
      <Contact />
    </div>
  );
}
