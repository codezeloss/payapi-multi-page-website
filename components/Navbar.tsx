import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CTAButton from "./CTAButton";
import logo from "/assets/shared/desktop/logo.svg";
import menuIcon from "/assets/shared/mobile/menu.svg";
import closeIcon from "/assets/shared/mobile/close.svg";
import Menu from "./Menu";

const Navbar = () => {
  const [menuDisplayed, menuIsDisplayed] = useState<boolean>(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  const menuToggle = () => {
    menuIsDisplayed((prevState) => !prevState);
  };

  return (
    <div className="customSpace flex justify-between items-center mt-[45px] mb-[74px] 2bp:mb-[48px] 4bp:mt-[40px]">
      <div className="flex items-center space-x-[64.34px]">
        <Link href="/" passHref>
          <Image
            className="cursor-pointer"
            src={logo}
            alt="Payapi logo"
            width="135px"
            height="38px"
            priority
          />
        </Link>

        <div className="font-public-sans font-bold text-[15px] leading-[18px] text-sj-blue/[.7] flex space-x-[40px] 3bp:hidden">
          <Link href="/pricing" passHref>
            <a
              className={`hover:text-sj-blue ${
                currentRoute === "/pricing" ? "text-sj-blue" : ""
              }`}
            >
              Pricing
            </a>
          </Link>
          <Link href="/about" passHref>
            <a
              className={`hover:text-sj-blue ${
                currentRoute === "/about" ? "text-sj-blue" : ""
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a
              className={`hover:text-sj-blue ${
                currentRoute === "/contact" ? "text-sj-blue" : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>

      <div className="3bp:hidden">
        <CTAButton />
      </div>

      {!menuDisplayed && (
        <div
          className="hidden 3bp:flex w-[28px] h-[17px] cursor-pointer"
          onClick={menuToggle}
        >
          <Image
            className="w-fit h-fit"
            src={menuIcon}
            alt="Menu"
            width="28px"
            height="17px"
          />
        </div>
      )}

      {menuDisplayed && (
        <div>
          <Menu showMenu={menuToggle} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
