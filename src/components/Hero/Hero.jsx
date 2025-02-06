import profileImg from "../../assets/profile_img.png"
import "../Hero/Hero.css"
const Hero = () => {
    return (
        <div className="flex flex-col items-center gap-9">
            <img src={profileImg} className="w-60 rounded-full mt-36" alt="" />
            <h1 className="text-center  text-7xl font-semibold"><span className="hero-text">I'm Showrov Ghosh,</span> frontend developer based in Bangladesh</h1>
            <p className="w-1/2 items-center text-center">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            {/* buttons  */}
            <div>
                <div>Connect with me</div>
                <div>My Resume</div>
            </div>
        </div>
    );
};

export default Hero;