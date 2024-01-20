import { twMerge } from "tailwind-merge";
export default function SectionHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`${twMerge(
        "text-center text-3xl font-bold block w-fit m-auto relative before:content-[' '] before:w-8 before:h-8 before:bg-warning-hover before:absolute before:-left-1 before:top-1 before:-z-50  before:-translate-x-1/2 before:rounded-full",
        className
      )}`}
    >
      {title}
    </h2>
  );
}
