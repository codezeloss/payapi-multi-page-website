interface Props {
  text: string;
}

const CTAButton = ({ text }: Props) => {
  return (
    <button className="bg-dark-pink text-white font-public-sans font-bold text-[15px] leading-[18px] tracking-[-0.115385px] px-[25px] py-[16px] rounded-[24px] shadow-[10px_10px_25px_-10px_rgba(54,83,107,0.25)] w-[100%] cursor-pointer ml-auto hover:bg-charm-pink">
      {text}
    </button>
  );
};

export default CTAButton;
