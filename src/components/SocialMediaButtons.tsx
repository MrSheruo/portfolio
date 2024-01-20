import Button from "./Button";
import { FacebookIcon, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
const socialMedia = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-yasser-77135621b/",
    jsx: <Linkedin />,
  },
  {
    name: "github",
    link: "https://github.com/mrsheruo",
    jsx: <Github />,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100088503545195",
    jsx: <FacebookIcon />,
  },
];
export default function SocialMediaButtons({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={` justify-center items-center gap-2 ${className}`}>
      {socialMedia.map((item, index) => (
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "linear", delay: 0.8 }}
          key={index}
          href={item.link}
          className="group"
        >
          <Button size={"icon"} className="">
            {item.jsx}
          </Button>
        </motion.a>
      ))}
    </div>
  );
}
