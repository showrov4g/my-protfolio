import profileImg from "../../assets/profile_img.png"
const Hero = () => {
    return (
        <div className="flex flex-col items-center gap-9">
            <img src={profileImg} className="w-60 rounded-full" alt="" />
            <h1>I'm Showrov Ghosh, frontend developer based in Bangladesh</h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            {/* buttons  */}
            <div>
                <div>Connect with me</div>
                <div>My Resume</div>
            </div>
        </div>
    );
};

export default Hero;