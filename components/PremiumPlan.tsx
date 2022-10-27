import Image from "next/image";
import CTMButton from "./CTMButton";
import PricingPlan from "./PricingPlan";
import iconCheck from "/assets/shared/desktop/icon-check.svg";

const PremiumPlan = () => {
  return (
    <div className="max-w-[350px] 2bp:w-[223px]">
      <PricingPlan
        title="Premium Plan"
        description="Get tailored solutions, volume pricing, and dedicated support for your team "
        price="499.00"
      />

      <div className="border-b-[1px] border-b-sj-blue/[.25] space-y-[8px]">
        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Transactions
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Auth
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Identity
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Investments
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Assets
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Liabilities
          </p>
        </div>

        <div className="flex flex-row gap-[24px] pb-[24px]">
          <div className="w-[12px] h-[8px]">
            <Image className="w-[100%] h-[100%]" src={iconCheck} alt="Check" />
          </div>
          <p className="font-public-sans font-normal text-[16px] leading-[28px] text-sj-blue">
            Income
          </p>
        </div>
      </div>

      <CTMButton />
    </div>
  );
};

export default PremiumPlan;
