import { useSpring, animated } from "react-spring";

export function Anim({ children }: { children: React.ReactNode }) {
  const props = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
  });

  return <animated.div style={props}>{children}</animated.div>;
}

export function AnimY({ children }: { children: React.ReactNode }) {
  const props = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
  });

  return <animated.div style={props}>{children}</animated.div>;
}
