import CTA from "../../components/UserCTA";
import FreePlan from "../../components/FreePlan";
import BasicPlan from "../../components/BasicPlan";
import PremiumPlan from "../../components/PremiumPlan";

const Pricing = () => {
  return (
    <div className="customSpace">
      <section>
        <h2 className="mb-[72px]">Pricing</h2>

        <div className="flex gap-[30px] mb-[96px]">
          <FreePlan />
          <BasicPlan />
          <PremiumPlan />
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Pricing;
