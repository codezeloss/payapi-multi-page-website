import UserCTA from "../../components/UserCTA";
import Details from "../../components/Details";
import Features from "../../components/Features";
import Header from "../../components/Header";
import Partners from "../../components/Partners";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Partners />
      <Details />
      <Features />
      <UserCTA />
    </main>
  );
};

export default HomePage;
