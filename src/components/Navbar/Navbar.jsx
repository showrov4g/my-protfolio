import logo from "../../assets/logo.svg"
const Navbar = () => {
    return (
        <div className="w-11/12 flex items-center justify-between my-1.5 mx-auto ">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            {/* contact me button  */}
            <div>
                    <button>Connect with me</button>
            </div>
        </div>
    );
};

export default Navbar;