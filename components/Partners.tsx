import Image from "next/image";
import tesla from "/assets/shared/desktop/tesla-white.svg";
import microsoft from "/assets/shared/desktop/microsoft-white.svg";
import hp from "/assets/shared/desktop/hewlett-packard-white.svg";
import oracle from "/assets/shared/desktop/oracle-white.svg";
import google from "/assets/shared/desktop/google-white.svg";
import nvidia from "/assets/shared/desktop/nvidia-white.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="bg-mirage-blue py-[100px] mb-[150px] 2bp:mb-[100px]">
      <motion.section
        className="customSpace text-white flex items-center justify-between gap-[50px] 2bp:flex-col-reverse 2bp:gap-[64px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="w-[445px] h-[100%] 2bp:w-[457px] 2bp:flex 2bp:flex-col 2bp:justify-center 2bp:text-center 3bp:w-[100%]">
          <h3 className="text-white mb-[24px]">Who we work with</h3>

          <div className="mb-[32px]">
            <p className="ptext text-water-white/[.7]">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
          </div>

          <div>
            <Link href="/about">
              <a className="inline-block font-public-sans font-bold text-[15px] text-water-white leading-[18px] tracking-[-0.115385px] rounded-[24px] border-[1px] border-water-white py-[14px] px-[32px] hover:bg-white hover:text-mirage-blue">
                AboutUs
              </a>
            </Link>
          </div>
        </div>

        <div className="space-y-[39px] 3bp:flex 3bp:space-y-0 3bp:items-center 3bp:gap-[50px]">
          <div className="flex gap-[62px] items-center 1bp:gap-[32px] 3bp:flex-col 3bp:gap-[40px]">
            <div className="w-[129px] h-[17px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={tesla}
                alt="Tesla logo"
                width="129px"
                height="17px"
              />
            </div>
            <div className="w-[145px] h-[31px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={microsoft}
                alt="Tesla logo"
                width="145px"
                height="31px"
              />
            </div>
            <div className="w-[140px] h-[27px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={hp}
                alt="Tesla logo"
                width="140px"
                height="27px"
              />
            </div>
          </div>
          <div className="flex gap-[85px] items-center 1bp:gap-[54px] 3bp:flex-col 3bp:gap-[40px]">
            <div className="w-[131px] h-[17px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={oracle}
                alt="Tesla logo"
                width="131px"
                height="17px"
              />
            </div>
            <div className="w-[96px] h-[33px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={google}
                alt="Tesla logo"
                width="96px"
                height="33px"
              />
            </div>
            <div className="w-[137px] h-[26px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={nvidia}
                alt="Tesla logo"
                width="137px"
                height="26px"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Partners;
