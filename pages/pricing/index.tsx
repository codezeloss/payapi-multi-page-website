import Head from "next/head";
import UserCTA from "../../components/UserCTA";
import FreePlan from "../../components/FreePlan";
import BasicPlan from "../../components/BasicPlan";
import PremiumPlan from "../../components/PremiumPlan";

const Pricing = () => {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="customSpace">
        <h2 className="mb-[72px] 2bp:text-center">Pricing</h2>

        <div className="flex gap-[30px] mb-[96px] 2bp:gap-[10px] 2bp:justify-between 3bp:flex-col 3bp:mx-auto 3bp:text-center 3bp:gap-[48px] 3bp:items-center">
          <FreePlan />
          <BasicPlan />
          <PremiumPlan />
        </div>
      </section>

      <div>
        <UserCTA />
      </div>
    </div>
  );
};

export default Pricing;
