import Intro from "../components/Intro";
import Services from "../components/Services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full flex justify-center align-middle flex-col">
      <Intro />
      <Services />
    </section>
  );
}
