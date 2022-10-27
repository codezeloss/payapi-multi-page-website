const Stats = () => {
  return (
    <section className="flex gap-[30px] mb-[72px] 3bp:flex-col 3bp:justify-center 3bp:text-center 3bp:gap-[5px]">
      <div className="w-[100%] border-y-[1px] border-y-sj-blue/[.25] py-[16px] 3bp:border-b-0">
        <p className="ptext text-sj-blue text-[16px]">Team Members</p>
        <p className="font-dm-serif font-normal text-[56px] leading-[72px] tracking-[-0.430769px] text-dark-pink">
          300+
        </p>
      </div>

      <div className="w-[100%] border-y-[1px] border-y-sj-blue/[.25] py-[16px] 3bp:border-y-0">
        <p className="ptext text-sj-blue text-[16px]">Offices in the US</p>
        <p className="font-dm-serif font-normal text-[56px] leading-[72px] tracking-[-0.430769px] text-dark-pink">
          3
        </p>
      </div>

      <div className="w-[100%] border-y-[1px] border-y-sj-blue/[.25] py-[16px] 3bp:border-t-0">
        <p className="ptext text-sj-blue text-[16px]">Transactions analyzed</p>
        <p className="font-dm-serif font-normal text-[56px] leading-[72px] tracking-[-0.430769px] text-dark-pink">
          10M+
        </p>
      </div>
    </section>
  );
};

export default Stats;
