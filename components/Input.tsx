import CTAButton from "./CTAButton";

const Input = () => {
  return (
    <div>
      <div className="flex 3bp:flex-col 3bp:gap-[16px]">
        <div>
          <input
            className="outline-none text-sj-blue font-bold bg-white w-[327px] h-[48px] rounded-[24px] py-[16px] px-[27px]"
            type="text"
            placeholder="Enter email address"
          />
        </div>

        <div className="ml-[-3.5rem] 3bp:ml-0"><CTAButton /></div>
      </div>
    </div>
  );
};

export default Input;
