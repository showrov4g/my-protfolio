import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {

  return (
    <>

      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li className="cursor-pointer">
            <AnchorLink href="#home">Home</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#about">About me</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#mywork">portfolio</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#contact">Contact</AnchorLink>{" "}
          </li>
            </ul>
          </div>
          <a className="hidden md:block btn btn-ghost text-xl"><img src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li className="cursor-pointer">
            <AnchorLink href="#home">Home</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#about">About me</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#mywork">portfolio</AnchorLink>{" "}
          </li>
          <li className="cursor-pointer">
            <AnchorLink href="#contact">Contact</AnchorLink>{" "}
          </li>
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn py-3 px-3.5 cursor-pointer text-[22px] bg-linear-to-r to-[#DA7C25] from-[#B923E1] rounded-full  duration-500  hover:transition-transform ease-in-out hover:scale-110">
            <AnchorLink href="#contact">Connect with me</AnchorLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
