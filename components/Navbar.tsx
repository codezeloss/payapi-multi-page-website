import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CTAButton from "./CTAButton";
import logo from "/assets/shared/desktop/logo.svg";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="customSpace flex justify-between items-center mt-[45px] mb-[152px] 2bp:mb-[48px]">
      <div className="flex items-center space-x-[64.34px]">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={logo}
            alt="Payapi logo"
            width="135px"
            height="38px"
          />
        </Link>

        <div className="font-public-sans font-bold text-[15px] leading-[18px] text-sj-blue/[.7] flex space-x-[40px]">
          <Link href="/pricing">
            <a className={`hover:text-sj-blue ${
                currentRoute === "/pricing"
                  ? "text-sj-blue"
                  : ""
              }`}>Pricing</a>
          </Link>
          <Link href="/about">
            <a className={`hover:text-sj-blue ${
                currentRoute === "/about"
                  ? "text-sj-blue"
                  : ""
              }`}>About</a>
          </Link>
          <Link href="/contact">
            <a className={`hover:text-sj-blue ${
                currentRoute === "/contact"
                  ? "text-sj-blue"
                  : ""
              }`}>Contact</a>
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
