import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import Footer from "./Footer";
import Details from "./Details";
// import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <Body />
      <Details />
      <Contact />
    </div>
  );
}
