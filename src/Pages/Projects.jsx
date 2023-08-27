import Title from "../Component/Title";
import { useGetProjects } from "../Component/GetProjects";
import { motion } from "framer-motion";

const Projects = () => {
  const { loading, projects } = useGetProjects();

  if (loading) {
    return (
      <div className="section-dark" id="projects">
        <div className="page-container d-flex justify-content-center align-items-center">
          <div className="loading"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-dark overflow-x-hidden" id="projects">
      <section className="container">
        <Title title="Projects" />
        <div className="row row-gap-4 justify-content-center">
          {projects.map((project, index) => {
            const { title, liveDemo, repoUrl, img, id, description } = project;
            return (
              <div key={id} className="col-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`card mb-3 project-card d-flex ${
                    index % 2 ? " flex-row" : " flex-row-reverse"
                  }
                  `}
                >
                  <div
                    className="project-img overflow-hidden"
                    style={{ maxWidth: "400px" }}
                  >
                    <img
                      src={img}
                      className="card-img "
                      alt={title}
                      style={{ height: "-webkit-fill-available" }}
                    />
                  </div>
                  <div className="card-body text-light p-4 ">
                    <a href={repoUrl}>
                      <h5 className="">{title}</h5>
                    </a>
                    <p style={{fontSize:".9rem"}}>{description}</p>
                    <div className="d-flex gap-2">
                      <a href={repoUrl} className="btn">
                        View Code
                      </a>
                      <a href={liveDemo} className="btn">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
          <button
            type="button"
            className="btn mt-3"
            style={{ width: "fit-content" }}
          >
            More Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
