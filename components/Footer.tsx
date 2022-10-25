import Image from "next/image";
import Link from "next/link";
import logo from "/assets/shared/desktop/logo-white.svg";
import facebook from "/assets/shared/desktop/facebook.svg";
import twitter from "/assets/shared/desktop/twitter.svg";
import linkedin from "/assets/shared/desktop/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-mirage-blue">
      <div className="customSpace py-[31px] flex items-center justify-between">
        <div className="flex items-center space-x-[64.34px]">
          <Link href="/">
            <Image
              className="text-white"
              src={logo}
              alt="Payapi logo"
              width="135px"
              height="38px"
            />
          </Link>

          <div className="font-public-sans font-bold text-[15px] leading-[18px] text-water-white/[.7] flex space-x-[40px]">
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

        <div className="flex items-center gap-[24px] h-[24px]">
          <div>
            <Image className="cursor-pointer" src={facebook} alt="Facebook" width="24px" height="24px" />
          </div>
          <div>
            <Image className="cursor-pointer" src={twitter} alt="Twitter" width="24px" height="19.5px" />
          </div>
          <div>
            <Image className="cursor-pointer" src={linkedin} alt="Linkedin" width="24px" height="24px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
