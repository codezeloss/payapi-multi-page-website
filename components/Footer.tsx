import Image from "next/image";
import Link from "next/link";
import logo from "/assets/shared/desktop/logo-white.svg";
import facebook from "/assets/shared/desktop/facebook.svg";
import twitter from "/assets/shared/desktop/twitter.svg";
import linkedin from "/assets/shared/desktop/linkedin.svg";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="bg-mirage-blue">
      <div className="customSpace py-[31px] flex items-center justify-between 3bp:flex-col 3bp:gap-[40px] 3bp:py-[41px]">
        <div className="flex items-center space-x-[64.34px] 3bp:flex-col 3bp:space-x-0">
          <Link href="/">
            <Image
              className="text-white"
              src={logo}
              alt="Payapi logo"
              width="135px"
              height="38px"
              priority
            />
          </Link>

          <div className="font-public-sans font-bold text-[15px] leading-[18px] text-water-white/[.7] flex space-x-[40px] 3bp:flex-col 3bp:items-center 3bp:space-x-0 3bp:mt-[40px] 3bp:gap-[31px]">
            <Link href="/pricing">
              <a
                className={`hover:text-water-white ${
                  currentRoute === "/pricing" ? "text-water-white" : ""
                }`}
              >
                Pricing
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`hover:text-water-white ${
                  currentRoute === "/about" ? "text-water-white" : ""
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`hover:text-water-white ${
                  currentRoute === "/contact" ? "text-water-white" : ""
                }`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-[24px] h-[24px]">
          <div>
            <Image
              className="cursor-pointer"
              src={facebook}
              alt="Facebook"
              width="24px"
              height="24px"
              priority
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src={twitter}
              alt="Twitter"
              width="24px"
              height="19.5px"
              priority
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src={linkedin}
              alt="Linkedin"
              width="24px"
              height="24px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
