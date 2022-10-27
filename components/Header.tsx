import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import phoneMockup from "/assets/home/desktop/illustration-phone-mockup.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.section
      className="customSpace flex gap-[206px] items-center mb-[75px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="max-w-[546px]">
        <div>
          <h1 className="mb-[21px] h-[243px]">
            Start building with our APIs for absolutely free.
          </h1>
        </div>

        <div className="mb-[16px]">
          <Input />
        </div>

        <div>
          <p className="ptext ml-[27px] text-lightsj-blue">
            Have any questions?{" "}
            <span>
              <Link href="/contact">
                <a className="font-bold">Contact Us</a>
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="w-[263px] h-[500px]">
        <Image
          className="max-w-0 max-h-0 min-w-0 min-h-0 w-fit h-fit"
          src={phoneMockup}
          alt="Phone mockup"
        />
      </div>
    </motion.section>
  );
};

export default Header;
