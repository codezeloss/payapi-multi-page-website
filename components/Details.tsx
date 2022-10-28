import Image from "next/image";
import codeAPI from "/assets/home/desktop/illustration-easy-to-implement.png";
import twoPhones from "/assets/home/desktop/illustration-simple-ui.png";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div className="customSpace mb-[150px] 2bp:mb-[100px]">
      <motion.section
        className="flex items-center mb-[150px] gap-[125px] 1bp:gap-[70px] 2bp:flex-col 2bp:gap-[48px] 2bp:mb-[100px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="w-[445px] h-[281px] 1bp:w-[391.73px] 1bp:h-[250px] 3bp:w-[328px] 3bp:h-[209px]">
          <Image
            className="w-fit h-fit"
            src={codeAPI}
            alt="Code exmaple"
            width="445px"
            height="281px"
          />
        </div>

        <div className="w-[445px] 2bp:text-center 2bp:w-[573px] 3bp:w-[100%]">
          <h3 className="mb-[24px]">Easy to implement</h3>
          <p className="ptext">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="flex items-center gap-[95px] 1bp:gap-[70px] 2bp:flex-col-reverse 2bp:gap-[48px] relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="w-[445px] 2bp:text-center 2bp:w-[573px] 3bp:w-[100%]">
          <h3 className="mb-[24px]">Simple UI & UX</h3>
          <p className="ptext">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>

        <div className="w-[566px] h-[500px] 1bp:w-[363px] 1bp:h-[320px] 3bp:w-[328px] 3bp:h-[290px]">
          <Image
            className="w-fit h-fit"
            src={twoPhones}
            alt="Two phones"
            width="566px"
            height="500px"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Details;
