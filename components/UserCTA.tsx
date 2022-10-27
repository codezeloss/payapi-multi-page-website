import Input from "./Input";
import { motion } from "framer-motion";

const UserCTA = () => {
  return (
    <motion.section className="customSpace w-[100%] flex items-center justify-between mb-[96px] 2bp:flex-col 2bp:gap-[40px]"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
      <h3>Ready to start?</h3>

      <div>
        <Input />
      </div>
    </motion.section>
  );
};

export default UserCTA;
