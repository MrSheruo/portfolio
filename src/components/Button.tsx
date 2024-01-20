import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground gap-2",
  ],
  {
    variants: {
      variant: {
        default: ["bg-secondary hover:bg-secondary/90"],
        destructive: ["bg-destructive hover:bg-destructive/90"],
        success: ["bg-success hover:bg-success/90"],
        warning: ["bg-warning hover:bg-warning/90"],
        link: ["underline-offset-4 hover:underline text-secondary"],
      },
      size: {
        default: ["px-3 py-2"],
        icon: [
          "shadow-lg shadow-secondary/5",
          "bg-white hover:bg-white/70 text-black",
          "rounded-full",
          "w-12",
          "h-12",
          "p-2",
          "*:group-hover:scale-[1.1] *:group-hover:transition-transform",
        ],
      },
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export default function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${twMerge(
        buttonStyles({
          variant,
          size,
        }),
        className
      )}`}
    ></button>
  );
}
