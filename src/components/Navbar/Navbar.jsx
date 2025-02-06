import logo from "../../assets/logo.svg"
const Navbar = () => {
    return (
        <div className="w-10/12 flex items-center justify-between my-2.5 mx-auto ">
            <img src={logo} alt="" />
            {/* nav menu  */}
            <ul className="flex items-center gap-5">
                <li>Home</li>
                <li>About me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            {/* contact me button  */}
            <div>
                    <button className="btn py-3 px-3.5 cursor-pointer text-[22px] bg-linear-to-r to-[#DA7C25] from-[#B923E1] rounded-full  duration-500  hover:transition-transform ease-in-out hover:scale-110">Connect with me</button>
            </div>
        </div>
    );
};

export default Navbar;