import xmImg from "/projects/xm_photo.webp";
import talesImg from "/projects/tales_photo.webp";
import alienImg from "/projects/alien-invasion.webp";
import mcimg from "/projects/madinat-alcode.webp";
import reactSVG from "/icons/react.svg";
import jsSVG from "/icons/javascript.svg";
import tsSVG from "/icons/typescript.svg";
import nextSVG from "/icons/next.svg";
import nodeSVG from "/icons/node.svg";
import restSVG from "/icons/restapi.svg";
import twSVG from "/icons/tailwindcss.svg";
import mongodbSVG from "/icons/mongodb.svg";
import { BookOpenText, CloudCog, GraduationCap, Users } from "lucide-react";
export const projectsData = [
  {
    id: 1,
    title: "Madinaat Al-Code",
    description: "FullStack Blog app.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn UI",
      "MongoDB",
    ],
    image: mcimg,
    githubUrl: "https://github.com/MrSheruo/madinaat_al_code",
    livePreview: null,
  },
  {
    id: 2,
    title: "XM Technologies",
    description: "Landing pages for a tech startup.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI"],
    image: xmImg,
    githubUrl: "https://github.com/MrSheruo/xm_technologies",
    livePreview: "https://xm-technologies-project.vercel.app/",
  },
  {
    id: 3,
    title: "A Tale of Magic and The Nine kingdoms ",
    description: "Online novel website.",
    technologies: ["HTML", "CSS3", "JavaScript"],
    image: talesImg,
    githubUrl:
      "https://github.com/MrSheruo/A-tale-of-magic-and-the-nine-kingdoms",
    livePreview:
      "https://mrsheruo.github.io/A-tale-of-magic-and-the-nine-kingdoms/",
  },
  {
    id: 4,
    title: "Alien invasion",
    description: "Landing Page.",
    technologies: ["HTML", "SASS"],
    image: alienImg,
    githubUrl: "https://github.com/MrSheruo/Alien-invasion-Sass-practise/",
    livePreview: "https://mrsheruo.github.io/Alien-invasion-Sass-practise/",
  },
];

export const skillsData = [
  {
    id: 1,
    name: "JavaScript",
    icon: jsSVG,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: tsSVG,
  },

  {
    id: 3,
    name: "React",
    icon: reactSVG,
  },
  {
    id: 4,
    name: "Next.js",
    icon: nextSVG,
  },

  {
    id: 5,
    name: "TailwindCSS",
    icon: twSVG,
  },
  {
    id: 6,
    name: "Node.js",
    icon: nodeSVG,
  },
  {
    id: 7,
    name: "REST API",
    icon: restSVG,
  },
  {
    id: 8,
    name: "MongoDB",
    icon: mongodbSVG,
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Started my path",
    description:
      "In 2022, I started learning website design and development, and to this day I am still developing day after day.",
    date: "2022",
    icon: <BookOpenText className="hover:scale-[1.1] transition-transform" />,
  },

  {
    id: 2,
    title: "Freelancer",
    description:
      "I helped many clients improve the quality of their website by modifying the CSS and JavaScript",
    date: "2023",
    icon: <Users className="hover:scale-[1.1] transition-transform" />,
  },
  {
    id: 3,
    title: "JavaScript Developer",
    description:
      "I currently work as a JavaScript developer at Neama Dairy Products Company. My job is to create a data entry and database using JavaScript to automate the process of Google Sheets in managing the financial transactions of the entire company",
    date: "2023 - Present",
    icon: <CloudCog className="hover:scale-[1.1] transition-transform" />,
  },
  {
    id: 4,
    title: "Full Stack Instructor",
    description:
      "Also, I am teaching some students web programming  using MERN-Stack with Google Developers Student Clubs - MET academy.",
    date: "2024 - Present",
    icon: <GraduationCap className="hover:scale-[1.1] transition-transform" />,
  },
] as const;

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact Me", href: "#contact" },
];
