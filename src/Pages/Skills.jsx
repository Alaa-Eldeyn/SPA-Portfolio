import Title from "../Component/Title";
import { skills } from "../data";
import { motion } from "framer-motion";
const Skills = () => {
  const welcomeTitle = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="section-dark overflow-x-hidden" id="skills">
      <section className="container d-flex align-items-center flex-column">
        <Title title="Skills" />
        <div className="row gap-5 mb-2 h-100 justify-content-center align-items-center mt-3">
          {skills.map((item, index) => {
            return (
              <motion.div
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                transition={{ delay: index * 0.05 }}
                exit={{ y: "-100%", opacity: 0 }}
                key={item.id}
                className="skill col col-lg-2 d-flex flex-column justify-content-center align-items-center rounded"
              >
                <span className="rounded px-3">{item.icon}</span>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
