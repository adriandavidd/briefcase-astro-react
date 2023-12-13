import { useTypewriter, Cursor } from "react-simple-typewriter";

const Text = () => {
  const [text] = useTypewriter({
    words: ["Adrian", "Web developer"],
    loop: true,
  });
  return (
    <div>
      <span className="text-cyan-400 font-bold pl-2 text-6xl">
        I'm a {text}
      </span>
      <span className="text-cyan-400 font-bold text-6xl">
        <Cursor />
      </span>
    </div>
  );
};

export default Text;
