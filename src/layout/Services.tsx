import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { Boxes, MonitorSmartphone, ShoppingCart, Home } from "lucide-react";
const servicesDetails = [
  {
    id: 1,
    title: "Progressive Web Apps (PWA)",
    description:
      "Building fast, reliable and engaging web applications that work offline and provide a native app-like experience.",
    icon: (
      <MonitorSmartphone size={40} className="text-background-foreground " />
    ),
  },
  {
    id: 2,
    title: "Landing Pages",
    description:
      "Crafting attractive and effective landing pages that promote products, services, or events and convert visitors into leads or customers.",
    icon: <Home size={40} className="text-background-foreground " />,
  },
  {
    id: 3,
    title: "Dashboards",
    description:
      "Building and managing dashboards to help you monitor and analyze your data in real-time.",
    icon: <Boxes size={40} className="text-background-foreground " />,
  },
  {
    id: 4,
    title: "Ecommerce Websites",
    description:
      "Designing and developing user-friendly ecommerce websites that drive sales and provide a great shopping experience.",
    icon: <ShoppingCart size={40} className="text-background-foreground " />,
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="mainSections p-4 relative">
      {/* bg-colors */}
      <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-full rounded-l-full -z-10 left-0 opacity-20 blur-3xl bg-red-400 "></div>
      <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-full rounded-r-full -z-10 right-0 opacity-20 blur-3xl bg-indigo-500 "></div>
      {/* bg-colors */}
      <SectionHeader title="Services" />
      <p className="my-4 text-balance text-center">
        I specialize in creating high-quality web applications. Here are some of
        the services I offer:
      </p>
      {/* Services components */}
      <div className="flex flex-wrap gap-8 items-center justify-center mt-24 overflow-x-hidden">
        {servicesDetails.map((service: (typeof servicesDetails)[number]) => {
          let xT;
          const isEven: boolean = service.id % 2 === 0;
          isEven === true ? (xT = 100) : (xT = -100);
          return (
            <motion.div
              initial={{ opacity: 0, x: xT }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="flex max-w-fit flex-col gap-4 p-2 items-center justify-center text-center text-balance overflow-x-hidden"
              key={service.id}
            >
              <div className="">{service.icon}</div>
              <h3 className=" font-semibold text-2xl">{service.title}</h3>
              <p className=" max-w-[50ch]">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
