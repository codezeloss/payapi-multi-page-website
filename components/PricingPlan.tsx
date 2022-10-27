interface Props {
  title: string;
  description: string;
  price: string;
}

const PricingPlan = ({ title, description, price }: Props) => {
  return (
    <div className="mb-[24px]">
      <h5 className="text-dark-pink mb-[16px]">{title}</h5>

      <p className="ptext text-lightsj-blue mb-[8px]">{description}</p>

      <p className="font-dm-serif font-normal text-[56px] leading-[72px] tracking-[-0.430769px] text-sj-blue pb-[24px] border-b-[1px] border-b-sj-blue/[.25]">
        ${price}
      </p>
    </div>
  );
};

export default PricingPlan;
