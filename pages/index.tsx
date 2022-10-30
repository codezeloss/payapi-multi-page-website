import Head from "next/head";
import HomePage from "./home";

const Home = () => {
  return (
    <div>
      <Head>
        <title>payapi | Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
