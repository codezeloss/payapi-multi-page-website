import Image from "next/image";
import codeAPI from "/assets/home/desktop/illustration-easy-to-implement-1.png";
import twoPhones from "/assets/home/desktop/illustration-simple-ui-1.png";

const Details = () => {
  return (
    <div className="customSpace mb-[150px]">
      <section className="flex items-center mb-[150px] gap-[125px]">
        <div className="w-[445px] h-[281px]">
          <Image
            className="w-[445px] h-[281px]"
            src={codeAPI}
            alt="Code exmaple"
            width="445px"
            height="281px"
          />
        </div>

        <div className="w-[445px]">
          <h3 className="mb-[24px]">Easy to implement</h3>
          <p className="ptext">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>

      <section className="flex items-center gap-[95px]">
        <div className="w-[445px]">
          <h3 className="mb-[24px]">Simple UI & UX</h3>
          <p className="ptext">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>

        <div className="w-[566px] h-[500px]">
          <Image
            className="w-[566px] h-[500px]"
            src={twoPhones}
            alt="Two phones"
            width="566px"
            height="500px"
          />
        </div>
      </section>
    </div>
  );
};

export default Details;
