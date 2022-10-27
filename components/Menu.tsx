import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CTAButton from "./CTAButton";
import closeIcon from "/assets/shared/mobile/close.svg";

interface Props {
  showMenu(): void;
}

const Menu = ({ showMenu }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="w-[300px] h-[100vh] bg-mirage-blue text-water-white px-[24px] flex flex-col mx-auto absolute top-0 right-0 z-[20]">
      <div className="flex justify-between border-b-[1px] border-b-water-white/[.15] pb-[24px] mt-[48px] mb-[43px]">
        <div />
        <div
          className="w-[21.92px] h-[21.92px] cursor-pointer"
          onClick={showMenu}
        >
          <Image
            className="w-fit h-fit"
            src={closeIcon}
            alt="Close"
            width="21.92px"
            height="21.92px"
          />
        </div>
      </div>

      <div className="font-public-sans font-bold text-[20px] leading-[24px] text-water-white/[.7] flex flex-col  text-center gap-[32px] mb-[32px]">
        <Link href="/pricing">
          <a
            className={`hover:text-water-white ${
              currentRoute === "/pricing" ? "text-water-white" : ""
            }`}
            onClick={showMenu}
          >
            Pricing
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`hover:text-water-white ${
              currentRoute === "/about" ? "text-water-white" : ""
            }`}
            onClick={showMenu}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`hover:text-water-white ${
              currentRoute === "/contact" ? "text-water-white" : ""
            }`}
            onClick={showMenu}
          >
            Contact
          </a>
        </Link>
      </div>

      <div className="w-fit mx-auto" onClick={showMenu}>
        <CTAButton />
      </div>
    </div>
  );
};

export default Menu;
