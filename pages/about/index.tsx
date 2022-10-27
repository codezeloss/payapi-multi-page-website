import Image from "next/image";
import UserCTA from "../../components/UserCTA";
import Stats from "../../components/Stats";
import team from "/assets/about/desktop/image-team-members.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className="customSpace">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <h2 className="max-w-[644px] h-[189px] mb-[51px]">
            We empower innovators by delivering access to the financial system
          </h2>
        </motion.div>

        <div className="space-y-[56px] mb-[100px]">
          <motion.div
            className="flex flex-row justify-between"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h4 className="text-sj-blue">Our Vision</h4>
            <div className="max-w-[635px]">
              <p className="ptext text-lightsj-blue">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-row justify-between"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h4 className="text-sj-blue">Our Business</h4>
            <div className="max-w-[635px]">
              <p className="ptext text-lightsj-blue">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="w-fit mx-auto mb-[72px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <Image
          className=""
          src={team}
          alt="Team Members"
          width="1440px"
          height="500px"
        />
      </motion.div>

      <section>
        <div className="customSpace">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Stats />
          </motion.div>

          <div className="space-y-[56px] mb-[100px]">
            <motion.div
              className="flex flex-row justify-between"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h4 className="text-sj-blue">The Culture</h4>
              <div className="max-w-[635px]">
                <p className="ptext text-lightsj-blue">
                  We strongly believe there iss always an opportunity to learn
                  from each other outside of day-to-day work, whether it is
                  company-wide offsites, internal hackathons, or co-worker
                  meetups. We always value cross-team collaboration and
                  diversity of thought, no matter the job title.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-row justify-between"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h4 className="text-sj-blue">The People</h4>
              <div className="max-w-[635px]">
                <p className="ptext text-lightsj-blue">
                  We are all passionate about building a more efficient and
                  inclusive financial infrastructure together. At PayAPI, we
                  have diverse backgrounds and skills.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <UserCTA />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
