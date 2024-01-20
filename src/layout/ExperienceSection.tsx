import SectionHeader from "../components/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../lib/consts";
import { useTheme } from "../context/themeContext";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#222" : "#fff";
  const contentStyleObject = {
    backgroundColor: color,
  };
  return (
    <section id="experience" className="mainSections p-8">
      <SectionHeader title="Experience" />
      <div className=" my-10"></div>
      <VerticalTimeline lineColor="#222">
        {experienceData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="max-w-[60ch] md:max-w-[150ch]"
            contentStyle={contentStyleObject}
            contentArrowStyle={{
              borderRight: `12px solid  ${theme === "dark" ? "#222" : "#fff"}`,
            }}
            date={item.date}
            iconStyle={{  
              backgroundColor: "#222",
              color: "white",
            }}
            icon={item.icon}
          >
            <h3 className="text-xl font-medium text-primary-foreground">
              {item.title}
            </h3>
            <p className="text-primary-foreground">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
