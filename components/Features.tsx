import Feature from "./Feature";
import finances from "/assets/home/desktop/icon-personal-finances.svg";
import coverage from "/assets/home/desktop/icon-banking-and-coverage.svg";
import payments from "/assets/home/desktop/icon-consumer-payments.svg";

const Features = () => {
  return (
    <div className="customSpace flex gap-[30px] mb-[96px]">
      <Feature image={finances} title="Personal Finances" text="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account."/>

      <Feature image={coverage} title="Banking & Coverage" text="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."/>

      <Feature image={payments} title="Consumer Payments" text="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."/>
    </div>
  );
};

export default Features;
