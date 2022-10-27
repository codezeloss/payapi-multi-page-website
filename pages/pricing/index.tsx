import UserCTA from "../../components/UserCTA";
import FreePlan from "../../components/FreePlan";
import BasicPlan from "../../components/BasicPlan";
import PremiumPlan from "../../components/PremiumPlan";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div>
      <motion.section
        className="customSpace"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="mb-[72px] 2bp:text-center">Pricing</h2>

        <div className="flex gap-[30px] mb-[96px] 2bp:gap-[10px] 2bp:justify-between 3bp:flex-col 3bp:mx-auto 3bp:text-center 3bp:gap-[48px] 3bp:items-center">
          <FreePlan />
          <BasicPlan />
          <PremiumPlan />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <UserCTA />
      </motion.div>
    </div>
  );
};

export default Pricing;
