import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white font-syne">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const TerminalCard = () => (
  <motion.div
    variants={fadeIn("left", "spring", 0.3, 0.75)}
    className="w-full max-w-[460px] shrink-0 rounded-2xl overflow-hidden shadow-2xl"
    style={{ background: "#13111c" }}
  >
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#1e1a2e" }}>
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
      <span className="ml-auto text-xs" style={{ color: "#c4b5fd" }}>hieu@portfolio</span>
    </div>
    {/* Content */}
    <div className="px-5 py-4 font-mono text-[13px] leading-6 font-normal">
      <p><span style={{ color: "#a78bfa" }}>$</span> <span style={{ color: "#f8f8f2" }}>cat about.json</span></p>
      <p style={{ color: "#f8f8f2" }}>{"{"}</p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"name"</span><span style={{ color: "#f8f8f2" }}>: </span><span style={{ color: "#ffffff" }}>"Minh Hiếu"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"role"</span><span style={{ color: "#f8f8f2" }}>: </span><span style={{ color: "#ffffff" }}>"Web &amp; Game Developer"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"company"</span><span style={{ color: "#f8f8f2" }}>: </span><span style={{ color: "#ffffff" }}>"Garena Viet Nam"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"focus"</span><span style={{ color: "#f8f8f2" }}>: [</span></p>
      <p className="pl-8"><span style={{ color: "#ffffff" }}>"Web Development"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-8"><span style={{ color: "#ffffff" }}>"Game Development"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-8"><span style={{ color: "#ffffff" }}>"Broadcast Operations"</span></p>
      <p className="pl-4"><span style={{ color: "#f8f8f2" }}>],</span></p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"languages"</span><span style={{ color: "#f8f8f2" }}>: [</span></p>
      <p className="pl-8"><span style={{ color: "#ffffff" }}>"JavaScript"</span><span style={{ color: "#f8f8f2" }}>, </span><span style={{ color: "#ffffff" }}>"Python"</span><span style={{ color: "#f8f8f2" }}>,</span></p>
      <p className="pl-8"><span style={{ color: "#ffffff" }}>"Java"</span><span style={{ color: "#f8f8f2" }}>, </span><span style={{ color: "#ffffff" }}>"C++"</span></p>
      <p className="pl-4"><span style={{ color: "#f8f8f2" }}>],</span></p>
      <p className="pl-4"><span style={{ color: "#c084fc" }}>"available"</span><span style={{ color: "#f8f8f2" }}>: </span><span style={{ color: "#a78bfa" }}>true</span></p>
      <p style={{ color: "#f8f8f2" }}>{"}"}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <div className="mt-4 flex flex-col lg:flex-row items-start gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px] flex-1"
        >
          {config.sections.about.content}
        </motion.p>

        <TerminalCard />
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
