import Button from "../components/Button";
import SocialMediaButtons from "../components/SocialMediaButtons";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypedElement from "../components/TypedElement";

export default function IntroSection() {
  const colors =
    " w-96 h-96 mt-12  opacity-30 blur-3xl  absolute top-1/3 left-1/3 translate-y-[-50%] -z-30";
  return (
    <>
      {/* <div className=" h-[100vh]  bg-secondary absolute inset-0 -z-50"></div> */}
      <section id="home" className="mainSections p-8 relative">
        {/* bg-blend-multiply */}
        <div
          className={"rounded-br-lg bg-warning translate-x-[-50%]" + colors}
        ></div>
        <div
          className={"rounded-bl-lg bg-destructive translate-x-[50%]" + colors}
        ></div>
        {/* bg-blend-multiply */}
        <div className="flex flex-col md:flex-row gap-6 self-center md:mt-28">
          <div className="text-center">
            {/* Text */}
            <h1 className="sm:text-6xl text-4xl font-bold mb-4 ">
              Ahmed Yasser
            </h1>
            <p className="text-2xl">Frontend_Developer</p>
            <p>
              What can I do ?{" "}
              <TypedElement
                texts={["Code()", "Eat()", "Sleep()", "Repeat()"]}
              />
            </p>

            {/* Text */}
            {/* Buttons */}
            <div className="flex gap-4 justify-center items-center mt-8">
              <motion.a
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                whileTap={{ scale: 1.08, rotate: "-1.2deg" }}
                href="#contact"
                title="Contact me"
                className="group"
              >
                <Button className="">
                  Hire me
                  <Mail className="group-hover:translate-x-1 group-hover:scale-[1.08] transition-transform" />
                </Button>
              </motion.a>
              <motion.a
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                whileTap={{ scale: 1.08, rotate: "1.2deg" }}
                href="/Ahmed Yasser - CV.pdf"
                title="Download My CV"
                target="_blank"
                download
                className="group"
              >
                <Button className="">
                  Download CV{" "}
                  <Download className="group-hover:translate-y-1 group-hover:scale-[1.1] transition-transform" />
                </Button>
              </motion.a>
            </div>
            <SocialMediaButtons className="flex mt-8" />
            {/* Buttons */}
          </div>
        </div>
      </section>
      <div className="mb-24"></div>
    </>
  );
}
