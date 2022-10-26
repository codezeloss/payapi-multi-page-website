import Image from "next/image";
import CTA from "../../components/CTA";
import Form from "../../components/Form";
import tesla from "/assets/shared/desktop/tesla.svg";
import microsoft from "/assets/shared/desktop/microsoft.svg";
import hp from "/assets/shared/desktop/hewlett-packard.svg";
import oracle from "/assets/shared/desktop/oracle.svg";
import google from "/assets/shared/desktop/google.svg";
import nvidia from "/assets/shared/desktop/nvidia.svg";

const Contact = () => {
  return (
    <section className="customSpace">
      <div className="h-[100%]">
        <h2 className="max-w-[730px] h-[133px] mb-[43px]">
          Submit a help request and we’ll get in touch shortly.
        </h2>
      </div>

      <div className="flex mb-[93px] gap-[124px] items-center">
        <Form />

        <div className="max-w-[541px]">
          <h5 className="mb-[40px] max-w-[445px]">
            Join the thousands of innovators already building with us
          </h5>
          <div className="space-y-[39px]">
            <div className="flex gap-[62px] items-center">
              <div className="w-[130.2px] h-[17px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={tesla}
                  alt="Tesla logo"
                  width="130.2px"
                  height="17px"
                />
              </div>
              <div className="w-[146.35px] h-[31px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={microsoft}
                  alt="Tesla logo"
                  width="146.35px"
                  height="31px"
                />
              </div>
              <div className="w-[141.31px] h-[27px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={hp}
                  alt="Tesla logo"
                  width="141.31px"
                  height="27px"
                />
              </div>
            </div>
            <div className="flex gap-[85px] items-center">
              <div className="w-[132.22px] h-[17px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={oracle}
                  alt="Tesla logo"
                  width="132.22px"
                  height="17px"
                />
              </div>
              <div className="w-[96.9px] h-[33px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={google}
                  alt="Tesla logo"
                  width="96.9px"
                  height="33px"
                />
              </div>
              <div className="w-[138.28px] h-[26px]">
                <Image
                  className="max-w-0 max-h-0 min-w-0 min-h-0"
                  src={nvidia}
                  alt="Tesla logo"
                  width="138.28px"
                  height="26px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default Contact;
