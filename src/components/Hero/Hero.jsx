import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../../assets/profile_img.png"
import "../Hero/Hero.css"
const Hero = () => {
    return (
        <div id='home' className="flex flex-col items-center gap-9">
            <img src={profileImg} className="w-60 rounded-full mt-36" alt="" />
            <h1 className="text-center  text-7xl font-semibold"><span className="hero-text">I'm Showrov Ghosh,</span> frontend developer based in Bangladesh</h1>
            <p className="w-1/2 text-center text-2xl leading-10">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            {/* buttons  */}
            <div className=" md:flex items-center space-y-6 gap-6 text-2xl font-medium mb-12">
                <div className="py-6 px-12 rounded-full bg-linear-to-r from-[#DF8908] to-[#B415FF] cursor-pointer transition-all duration-75 hover:border-2 hover:border-white"><AnchorLink href="#contact">Connect with me</AnchorLink></div>
                <div className="py-6 px-12 rounded-full border-2 border-white transition-all duration-75 hover:border-[#B415FF]">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;