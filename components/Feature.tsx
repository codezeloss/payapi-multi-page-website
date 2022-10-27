import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
}

const Feature = ({ image, title, text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-[32px]">
      <div className="2bp:w-[80px] 2bp:h-[80px]">
          <Image src={image} alt={title} width="106px" height="106px" />
        </div>
      </div>

      <p className="font-public-sans font-bold text-[18px] leading-[25px] tracking-[-0.115385px] text-sj-blue mb-[16px]">
        {title}
      </p>

      <p className="ptext text-lightsj-blue text-center">{text}</p>
    </div>
  );
};

export default Feature;
