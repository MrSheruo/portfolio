import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { skillsData } from "../lib/consts";

export default function AboutMeSection() {
  return (
    <section id="about" className="mainSections relative">
      <div className="w-96 h-96 rounded-full bg-warning-hover blur-3xl opacity-70 absolute sm:top-1/3  top-1/2 right-20 sm:left-1/3 -z-30"></div>
      <div className="w-72 h-72 rounded-full bg-destructive blur-3xl opacity-40 absolute top-20 left-20 -z-30"></div>
      <SectionHeader title="About me" />

      <div className="flex md:flex-row flex-col justify-center items-center gap-8 my-24 overflow-hidden">
        {/* Mobile Image */}
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.01, ease: "linear" }}
          viewport={{ once: true }}
          src="/ahmed-yasser-2.jpg"
          alt="Ahmed Yasser Image"
          title="Ahmed Yasser"
          width={240}
          height={240}
          className="rounded-full mt-12 md:hidden aspect-square  object-cover object-center pointer-events-none animate-imgBounce"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className=" p-8 bg-background-foreground relative rounded-r-lg md:mt-8">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-destructive/90 z-50"></div>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="mt-4 max-w-[40ch] text-background"
          >
            I am <b>Ahmed Yasser</b> a Frontend Developer experienced in{" "}
            <b>[HTML, CSS, JavaScript, React, Tailwind, Next.js]</b> from Egypt
            with a passion to Code, my goal in 2024 is to start my own startup.
            <br />I am studying computer science at MET - academy
          </motion.p>
        </div>
        {/* PC Image */}
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.01, ease: "linear" }}
          viewport={{ once: true }}
          src="/ahmed-yasser-2.jpg"
          alt="Ahmed Yasser Image"
          title="Ahmed Yasser"
          width={240}
          height={240}
          className="rounded-full mt-12 hidden md:block aspect-square object-cover object-center pointer-events-none animate-imgBounce"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col items-center gap-4 mt-4">
  <h3 className="text-xl font-semibold mb-2 mt-4">Tech Stack</h3>
  <div className="flex gap-4 max-w-52 flex-wrap justify-center items-center">
    {skillsData.map((item) => {
      return (
        <img
          src={item.icon}
          key={item.id}
          alt={item.name}
          title={item.name}
          width={45}
          height={45}
          draggable="false"
          className={`cursor-pointer hover:scale-[1.1] transition-transform`}
        />
      );
    })}
  </div>
</div>; */
}
