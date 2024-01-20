import { useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
  texts: string[];
};
export default function TypedElement({ texts }: Props) {
  const typedEl = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: texts,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 300,
      showCursor: false,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [typedEl]);
  return <span className="h-[24px] text-xl italic" ref={typedEl}></span>;
}
