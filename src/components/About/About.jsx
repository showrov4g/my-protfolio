import profileImg from "../../assets/about_img.jpg";
import themeParen from "../../assets/theme_pattern.svg";
import "./About.css";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20 ">
      {/* title  */}
      <div className="relative ">
        <h1 className="px-7 text-7xl font-semibold z-10">About Me</h1>
        <img className="about-patten" src={themeParen} alt="" />
      </div>
      {/* left section  */}
      <div className="flex gap-20">
        <div>
          <img src={profileImg} alt="" />
        </div>
        {/* right section  */}
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-xl font-medium">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          {/* skills */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 transition-all duration-200 hover:scale-105">
              <p className="min-w-[150px] text-xl font-medium">HTML & CSS</p> <hr className="w-[50%] outline-none border-none rounded-full h-2 bg-linear-to-r from-[#DF8908] to-[#B415FF]" />
            </div>
            <div className="flex items-center gap-4 transition-all duration-200 hover:scale-105">
              <p  className="min-w-[150px] text-xl font-medium">React JS</p> <hr className="w-[70%] outline-none border-none rounded-full h-2 bg-linear-to-r from-[#DF8908] to-[#B415FF]" />
            </div>
            <div className="flex items-center gap-4 transition-all duration-200 hover:scale-105">
              <p  className="min-w-[150px] text-xl font-medium">JavaScript</p> <hr className="w-[60%] outline-none border-none rounded-full h-2 bg-linear-to-r from-[#DF8908] to-[#B415FF]" />
            </div>
            <div className="flex items-center gap-4 transition-all duration-200 hover:scale-105">
              <p  className="min-w-[150px] text-xl font-medium">Next JS</p> <hr className="w-[50%] outline-none border-none rounded-full h-2 bg-linear-to-r from-[#DF8908] to-[#B415FF]" />
            </div>
          </div>
        </div>
      </div>

      {/* achievement section  */}
      <div>
        <div>
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div>
          <h1>10+</h1>
          <p>Project completed</p>
        </div>
        <hr />
        <div>
          <h1>10+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
