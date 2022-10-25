import Image from "next/image";
import Link from "next/link";
import CTAInput from "./Input";
import phoneMockup from "/assets/home/desktop/illustration-phone-mockup-2.png";
// import bgMockup from "/assets/shared/desktop/bg-pattern-circle.svg";

const Header = () => {
  return (
    <section className="customSpace flex gap-[206px] items-center mb-[75px]">
      <div className="max-w-[546px]">
        <div>
          <h1 className="mb-[21px] h-[243px]">
            Start building with our APIs for absolutely free.
          </h1>
        </div>

        <div className="mb-[16px]">
          <CTAInput />
        </div>

        <div>
          <p className="ptext ml-[27px] text-lightsj-blue">
            Have any questions?
            <span>
              <Link href="/contact">
                <a className="font-bold">Contact Us</a>
              </Link>
            </span>
          </p>
        </div>
      </div>

      <Image
        className="max-w-0 max-h-0 min-w-0 min-h-0 w-[263px] h-[500px]"
        src={phoneMockup}
        alt="Phone mockup"
      />
    </section>
  );
};

export default Header;
