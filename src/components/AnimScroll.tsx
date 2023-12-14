import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export function AnimScroll({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambia a false si quieres que la animación se active cada vez que el elemento entra en la vista
  });

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(100%)",
    },
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

export default AnimScroll;
