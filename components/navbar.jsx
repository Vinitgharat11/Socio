import {
  BiHomeAlt2,
  BiMessageSquare,
  BiHeart,
  BiSearch,
  BiCertification,
} from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="top-container">
        <div className="flex justify-between ">
          <span className="mx-10 text-lg my-2">Socio</span>
          <div className="relative">
            <BiMessageSquare size={27} className="mx-5 my-2" />
            <span className="bg-red-500 rounded-full w-5 text-center px-1 py-0 absolute top-5 right-4">0</span>
          </div>

        </div>
      </div>
      <div className="nav-container flex fixed gap-x-10 mx-10 border-t-2 bottom-0 my-2 p-2 ">
        <BiHomeAlt2 size={25} />
        <BiSearch size={25} />
        <BiHeart size={25} />
        <BiCertification size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
