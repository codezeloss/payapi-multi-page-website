import Head from "next/head";
import Image from "next/image";
import UserCTA from "../../components/UserCTA";
import Stats from "../../components/Stats";
import team from "/assets/about/desktop/image-team-members.jpg";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="customSpace">
        <div>
          <h2 className="max-w-[644px] h-[189px] mb-[51px] 2bp:text-center 2bp:mx-auto 2bp:max-w-[537px] 3bp:h-[100%]">
            We empower innovators by delivering access to the financial system
          </h2>
        </div>

        <div className="space-y-[56px] mb-[100px] 3bp:mb-[76px]">
          <div className="flex flex-row justify-between 3bp:flex-col 3bp:text-center">
            <div className="2bp:min-w-[220px]">
              <h4 className="text-sj-blue">Our Vision</h4>
            </div>
            <div className="max-w-[635px]">
              <p className="ptext text-lightsj-blue">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between 3bp:flex-col 3bp:text-center">
            <div className="2bp:min-w-[220px]">
              <h4 className="text-sj-blue">Our Business</h4>
            </div>
            <div className="max-w-[635px]">
              <p className="ptext text-lightsj-blue">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-fit mx-auto mb-[72px]">
        <Image
          className=""
          src={team}
          alt="Team Members"
          width="1440px"
          height="500px"
        />
      </div>

      <section>
        <div className="customSpace">
          <div>
            <Stats />
          </div>

          <div className="space-y-[56px] mb-[100px] 3bp:mb-[76px]">
            <div className="flex flex-row justify-between 3bp:flex-col 3bp:text-center">
              <div className="2bp:min-w-[220px]">
                <h4 className="text-sj-blue">The Culture</h4>
              </div>
              <div className="max-w-[635px]">
                <p className="ptext text-lightsj-blue">
                  We strongly believe there iss always an opportunity to learn
                  from each other outside of day-to-day work, whether it is
                  company-wide offsites, internal hackathons, or co-worker
                  meetups. We always value cross-team collaboration and
                  diversity of thought, no matter the job title.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between 3bp:flex-col 3bp:text-center">
              <div className="2bp:min-w-[220px]">
                <h4 className="text-sj-blue">The People</h4>
              </div>
              <div className="max-w-[635px]">
                <p className="ptext text-lightsj-blue">
                  We are all passionate about building a more efficient and
                  inclusive financial infrastructure together. At PayAPI, we
                  have diverse backgrounds and skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <UserCTA />
        </div>
      </section>
    </div>
  );
};

export default About;
