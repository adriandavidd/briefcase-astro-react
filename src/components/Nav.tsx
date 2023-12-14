import { Anim } from "./Anim";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center fixed top-0 w-full z-50">
      <Anim>
        <div className="bg-zinc-950 h-20 p-5 mt-5 border-2 border-zinc-900 rounded-lg">
          <div className="flex items-center  h-full w-full">
            <div className="flex">
              <button className="text-white font-medium mx-5 text-lg">
                Home
              </button>
              <button className="text-white font-medium mx-5 text-lg">
                About
              </button>
              <button className="text-white font-medium mx-5 text-lg">
                Projects
              </button>
            </div>
            <button className="text-white font-medium text-lg p-3 bg-zinc-950 border-2 border-cyan-400 rounded-lg mx-5">
              Contact
            </button>
          </div>
        </div>
      </Anim>
    </nav>
  );
};

export default Nav;
