import { ArrowBigRight, Github } from "lucide-react";
import { projectsData } from "../lib/consts";
import Badge from "./Badge";
import Button from "./Button";
import { motion } from "framer-motion";
type ProjectProps = (typeof projectsData)[0];

export default function Project({
  id,
  title,
  image,
  description,
  technologies,
  livePreview,
  githubUrl,
}: ProjectProps) {
  let x;
  const isEven: boolean = id % 2 === 0;
  isEven === true ? (x = 100) : (x = -100);
  return (
    <motion.div
      initial={{ opacity: 0, x: x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "linear" }}
      className=" max-w-[25rem] h-full m-auto bg-white flex flex-col rounded-2xl shadow-lg overflow-hidden hover:border-b-8 transition-all border-secondary"
    >
      <img
        alt={title}
        className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
        height="200"
        src={image}
        style={{
          aspectRatio: "400/200",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="flex flex-col flex-grow justify-between items-start gap-2 p-6">
        <h3 className="text-2xl font-bold text-[#222] mb-2">
          {title}{" "}
          {title === "Madinaat Al-Code" ? (
            <span className="text-[16px] font-normal">
              <i> working on it...</i>
            </span>
          ) : (
            ""
          )}
        </h3>
        <p className="text-[#222] mb-4 text-balance">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank">
            <Button className="bg-[#222] text-[#eee] transform transition duration-500 hover:scale-108">
              GitHub <Github />
            </Button>
          </a>
          {livePreview && (
            <a href={livePreview} target="_blank">
              <Button className="bg-[#222] text-[#eee] transform transition duration-500 hover:scale-108">
                Vist URL <ArrowBigRight />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
