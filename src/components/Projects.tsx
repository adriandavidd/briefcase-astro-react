import AnimScroll from "./AnimScroll";
import { Anim } from "./Anim";

export const ProjectText = () => {
  return (
    <div>
      <Anim>
        <span className="text-white font-bold text-4xl">Projects</span>
      </Anim>
    </div>
  );
};

export const Project = () => {
  return (
    <AnimScroll>
      <div className="flex items-center justify-center mx-40 my-5 gap-10">
        <div className="bg-zinc-950 hover:bg-zinc-900 border-2 border-zinc-900 p-40 px-80 rounded-lg ">
          <p className="text-white font-bold text-2xl">soon...</p>
        </div>
      </div>
    </AnimScroll>
  );
};
