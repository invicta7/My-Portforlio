import image1 from "/public/movie.png";
import grocery from "/public/grocery.png";
import { motion } from "framer-motion";
const ProjectsData = [
  {
    image1: image1,
    title: "Movie-explorer App",
    description:
      "An interactive web platform designed to help users discover, explore, and track movies effortlessly. It features a clean and intuitive interface where users can browse trending films, search by title, genre, or release year, and access detailed information such as plot summaries, cast, trailers, and ratings. The website integrates APIs for real-time movie data, offers personalized watchlists, and supports responsive design for seamless use on any device.",
    technologies: ["React", "Tailwind", "JavaScript"],
    link: "https://movie-explorer-project.vercel.app/",
  },

  {
    image1: grocery,
    title: "Grocery Shopping App",
    description:
      "The Grocery Cart web app is a MERN stack e-commerce platform for grocery shopping. It allows users to browse, search, filter products, add items to a cart, and securely check out. Features include real-time inventory, user authentication, responsive design, and RESTful APIs with MongoDB for data handling. The React frontend uses modern UI components and optimized state management. It supports secure payment integration and scalable architecture, though it is still in development with more features being added.",
    technologies: ["MongoDB", "Express js", "React", "Node js"],
    link: "https://grocery-cart-umber.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onTransitionStart={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image1}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-white">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="p-4 border border-black bg-gradient-to-r from-blue-500 to-pink-500 rounded-md">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen, w-full flex-col items-center justify-start gap-16, p-0 mx-auto md:px-14 py-14 text-justify"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl py-10">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full  max-w-[1000px] flex-col gap-16 text-white md:px-14">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
