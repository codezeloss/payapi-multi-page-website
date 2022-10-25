import CTAButton from "./CTAButton";

const CTAInput = () => {
  return (
    <div className="input-box flex flex-row justify-between items-center outline-none mr-auto">
      <div>
        <input
          className="outline-none text-sj-blue"
          type="text"
          placeholder="Enter email address"
        />
      </div>

      <CTAButton text="Schedule a Demo" />
    </div>
  );
};

export default CTAInput;
