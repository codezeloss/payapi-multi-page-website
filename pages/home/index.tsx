import CTA from "../../components/CTA";
import Details from "../../components/Details";
import Features from "../../components/Features";
import Header from "../../components/Header";
import Partners from "../../components/Partners";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Partners/>
      <Details/>
      <Features/>
      <CTA/>
    </main>
  );
};

export default HomePage;
