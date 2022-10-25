import Image from "next/image";
import Link from "next/link";
import CTAButton from "./Button";
import logo from "/assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <div className="customSpace flex justify-between items-center mt-[45px] mb-[152px]">
      <div className="flex items-center space-x-[64.34px]">
        <Link href="/">
          <Image className="cursor-pointer" src={logo} alt="Payapi logo" width="135px" height="38px" />
        </Link>

        <div className="font-public-sans font-bold text-[15px] leading-[18px] text-sj-blue/[.7] flex space-x-[40px]">
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>

      <div>
        <CTAButton text="Schedule a Demo" />
      </div>
    </div>
  );
};

export default Navbar;
