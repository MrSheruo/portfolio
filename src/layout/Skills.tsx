import { skillsData } from "../lib/consts";
import Marquee from "react-fast-marquee";
export default function Skills() {
  return (
    <div className="flex items-center justify-center">
      <Marquee className="flex p-4 max-w-7xl">
        {skillsData.map((item) => (
          <img
            src={item.icon}
            key={item.id}
            alt={item.name}
            title={item.name}
            width={80}
            height={80}
            draggable="false"
            className={`cursor-pointer hover:scale-[1.2] transition-transform mr-10 md:mr-24`}
          />
        ))}
      </Marquee>
    </div>
  );
}
