import Title from "../Component/Title";
import about from "../assets/About me2.png";
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <div className="section-trans overflow-x-hidden" id="about_me">
      <section className="container">
        <Title title="About me" />
        <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
          >
            <img
              src={about}
              className="img order-1 order-lg-0 rounded about-img"
              alt="about me"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <p className="text-start">
              My name is <span className="about-name fw-bold">Alaa Eldeyn</span>
              , and I am a dedicated front-end web developer from Egypt. I have
              a passion for learning and creating new applications with fast,
              secure, and clean code. I obtained certificates of completion and
              proficiency from{" "}
              <span className="about-cert fw-bold">
                ( Udemy, Udacity, Hacker Rank, Maharah Tech, Coderbyte, W3
                Schools, Solo Learn ).
              </span>
              <br /> I specialize in programming and maintaining responsive
              websites that provide seamless user experiences.I take pride in
              crafting dynamic and engaging interfaces by writing optimized and
              clean code. I stay up-to-date with the latest development tools
              and techniques to ensure that I deliver cutting-edge web
              applications.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3">
              {[
                {
                  text: "Download CV",
                  link: "https://drive.google.com/uc?export=download&id=19cIP0o22E5FASfYWiXW8wBvHhNc13sJM",
                },
                {
                  text: "Get in touch",
                  link: "#contact",
                },
                {
                  text: "Show Skills",
                  link: "#skills",
                },
              ].map((item, index) => (
                <div key={index} className="me-0 me-lg-4">
                  <a href={item.link}>
                    <button type="button" className="btn">
                      {item.text}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_me;
