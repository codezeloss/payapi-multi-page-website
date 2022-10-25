import Image from "next/image";
import tesla from "/assets/shared/desktop/tesla.svg";
import microsoft from "/assets/shared/desktop/microsoft.svg";
import hp from "/assets/shared/desktop/hewlett-packard.svg";
import oracle from "/assets/shared/desktop/oracle.svg";
import google from "/assets/shared/desktop/google.svg";
import nvidia from "/assets/shared/desktop/nvidia.svg";

const Partners = () => {
  return (
    <div className="bg-mirage-blue py-[100px]">
      <div className="customSpace  text-white flex items-center justify-between">
        <div className="max-w-[445px]">
          <h3 className="text-white mb-[24px]">Who we work with</h3>

          <p className="ptext text-water-white/[.7] mb-[32px]">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>

          <button className="font-public-sans font-bold text-[15px] text-water-white leading-[18px] tracking-[-0.115385px] rounded-[24px] border-[1px] border-water-white py-[14px] px-[32px] hover:bg-white hover:text-mirage-blue">
            AboutUs
          </button>
        </div>

        <div className="space-y-[39px]">
          <div className="flex gap-[62px] items-center">
            <div className="w-[129px] h-[17px]">
              <Image
                className="max-w-0 max-h-0 min-w-0 min-h-0"
                src={tesla}
                alt="Tesla logo"
                width="129px"
                height="17px"
              />
            </div>
            <div className="w-[145px] h-[31px]">
              <Image
              className="max-w-0 max-h-0 min-w-0 min-h-0"
              src={microsoft}
              alt="Tesla logo"
              width="145px"
              height="31px"
            /></div>
            <div className="w-[140px] h-[27px]">
              <Image
              className="max-w-0 max-h-0 min-w-0 min-h-0"
              src={hp}
              alt="Tesla logo"
              width="140px"
              height="27px"
            />
            </div>
          </div>
          <div className="flex gap-[85px] items-center">
            <div className="w-[131px] h-[17px]"><Image
              className="max-w-0 max-h-0 min-w-0 min-h-0"
              src={oracle}
              alt="Tesla logo"
              width="131px"
              height="17px"
            /></div>
            <div className="w-[96px] h-[33px]"><Image
              className="max-w-0 max-h-0 min-w-0 min-h-0"
              src={google}
              alt="Tesla logo"
              width="96px"
              height="33px"
            /></div>
            <div className="w-[137px] h-[26px]"><Image
              className="max-w-0 max-h-0 min-w-0 min-h-0"
              src={nvidia}
              alt="Tesla logo"
              width="137px"
              height="26px"
            /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
