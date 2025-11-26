import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          style={{ textAlign: "justify" }}
        >
          I am a versatile Software Engineer and Python Developer with 4 years of
          experience in building high-performance APIs, automation workflows,
          scalable backend services, and data-driven applications. I specialize in
          Python frameworks such as FastAPI, Django, and Flask, and have strong
          expertise in AWS, Azure, SQL, PostgreSQL, and MongoDB for developing
          cloud-ready, reliable solutions. I also work extensively with Qlik Cloud,
          Selenium, and automation scripts to create dynamic dashboards and
          real-time reporting systems.
          <br /><br />
          My capabilities extend to Generative AI and Agentic AI, including LLM
          integration (GPT, Claude, Gemini, Sonnet), multi-agent workflows, AI
          agents, and prompt engineering—helping reduce development and operational
          effort by up to 70%. Passionate about solving complex problems, I focus on
          delivering innovative, efficient, and user-centric software solutions
          across distributed and enterprise environments.
        </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
