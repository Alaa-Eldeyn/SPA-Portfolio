import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaNpm,
  FaMobile,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandBootstrap,
  TbBrandTypescript,
  TbBrandFramerMotion,
  TbMobiledata,
} from "react-icons/tb";
import { BiLogoRedux, BiLogoGit } from "react-icons/bi";
import { GoCommandPalette } from "react-icons/go";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export const navPages = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Skills", link: "#skills" },
  // { id: 4, name: "Certificates", link: "/certificates" },
  { id: 5, name: "About me", link: "#about_me" },
  { id: 3, name: "Projects", link: "#projects" },
  { id: 6, name: "Contact", link: "#contact" },
];

export const social = [
  { id: 1, icon: <FaInstagram />, link: "https://www.instagram.com/3lwa88/" },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/alaa-eldeyn/",
  },
  { id: 3, icon: <FaGithub />, link: "https://github.com/Alaa-Eldeyn" },
];

export const skills = [
  { id: 1, icon: <FaHtml5 />, text: "HTML5" },
  { id: 2, icon: <FaCss3 />, text: "CSS3" },
  { id: 3, icon: <FaJsSquare />, text: "JavaScript (ES6)" },
  // { id: 4, icon: <BiLogoJquery />, text: "jQuery" },
  { id: 5, icon: <TbBrandTypescript />, text: "TypeScript" },
  { id: 6, icon: <FaReact />, text: "React.js" },
  { id: 7, icon: <TbBrandNextjs />, text: "Next.js" },
  { id: 8, icon: <TbBrandBootstrap />, text: "Bootstrap" },
  { id: 9, icon: <SiTailwindcss />, text: "Tailwind" },
  { id: 10, icon: <FaNodeJs />, text: "Node.js" },
  { id: 11, icon: <SiExpress />, text: "Express.js" },
  { id: 12, icon: <SiMongodb />, text: "MongoDB" },
  { id: 13, icon: <FaDocker />, text: "Docker" },
  { id: 14, icon: <BiLogoRedux />, text: "Redux Toolkit" },
  { id: 15, icon: <BiLogoGit />, text: "Git" },
  { id: 16, icon: <FaGithub />, text: "Github" },
  { id: 17, icon: <TbMobiledata />, text: "RESTful API's" },
  { id: 18, icon: <GoCommandPalette />, text: "Command line" },
  { id: 19, icon: <FaMobile />, text: "Responsive Designs" },
  { id: 20, icon: <FaNpm />, text: "Package managers" },
  { id: 21, icon: <TbBrandFramerMotion />, text: "Framer Motion " },
];
