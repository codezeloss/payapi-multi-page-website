import Input from "./Input";

const UserCTA = () => {
  return (
    <section className="customSpace w-[100%] flex items-center justify-between mb-[96px] 2bp:flex-col 2bp:gap-[40px]">
      <h4>Ready to start?</h4>

      <div>
        <Input />
      </div>
    </section>
  );
};

export default UserCTA;
