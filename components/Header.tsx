import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import phoneMockup from "/assets/home/desktop/illustration-phone-mockup.png";

const Header = () => {
  return (
    <section
      className="customSpace flex gap-[206px] items-center mb-[75px] 1bp:gap-[130px] 2bp:flex-col-reverse 2bp:gap-[48px]"
    >
      <div className="max-w-[546px] 2bp:flex 2bp:flex-col 2bp:justify-center">
        <div>
          <h1 className="mb-[21px] h-[100%] 3bp:mb-[24px]">
            Start building with our APIs for absolutely free.
          </h1>
        </div>

        <div className="mb-[16px] 2bp:mx-auto">
          <Input />
        </div>

        <div>
          <p className="ptext ml-[27px] text-lightsj-blue 2bp:ml-0 2bp:text-center">
            Have any questions?{" "}
            <span>
              <Link href="/contact">
                <a className="font-bold">Contact Us</a>
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="min-w-[263px] min-h-[500px] 2bp:min-w-0 2bp:min-h-0 2bp:w-[159px] 2bp:h-[300px]">
        <Image
          className="w-fit h-fit 2bp:w-[159px] 2bp:h-[300px]"
          src={phoneMockup}
          alt="Phone mockup"
          priority
        />
      </div>
    </section>
  );
};

export default Header;
