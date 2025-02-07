import { useState } from "react";
import themePatten from "../../assets/theme_pattern.svg";
import "./MyWOrk.css";
const projects = [
  {
    name: "Prescripto",
    image: "https://i.ibb.co.com/vKbxXh1/ss.jpg",
    stack: "React, tailwind",
    description:
      "A web application that allows users to manage appointment for doctors",
    liveLink: "https://serene-crumble-e9ce54.netlify.app/",
    github: "https://github.com/showrov4g/Doctor-protal",
    challenges: "Optimizing user experience",
    improvements: "Add database to store user and doctors data",
  },
  {
    name: "Gadget-Heaven",
    image:
      "https://i.ibb.co.com/S4LZgqW7/Screenshot-2024-11-07-at-00-03-39-All-Product-Card.png",
    stack: "React js, Tailwind CSS, dasiUI",
    description: "This is a electronic item website",
    liveLink: "https://legendary-sherbet-6a85d6.netlify.app/",
    github: "https://github.com/showrov4g/Gadget-Heaven",
    challenges: "Implementing WebSockets for user authentication",
    improvements: "Integrating payment method for collecting payment from user",
  },
  {
    name: "Hostel management",
    image: "https://i.ibb.co.com/S4t8qW6w/full.jpg",
    stack: "React js, tailwind, firebase, mongoDb",
    description: "An e-commerce platform with secure payments.",
    liveLink: "https://example.com",
    github: "https://github.com/showrov4g/hostel-management",
    challenges: "Ensuring secure transactions and scalability.",
    improvements: "Adding AI-driven product recommendations.",
  },
];

const MyWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div id="mywork" className="p-8">
      <div className="flex flex-col mb-10 items-center justify-center relative">
        <div className="relative ">
          <h1 className="px-7 text-7xl font-semibold z-10">My Portfolio</h1>
          <img className="about-patten" src={themePatten} alt="" />
        </div>
      </div>
      {!selectedProject ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 shadow-lg rounded-2xl bg-white">
              <img
                src={project.image}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <button
                  className="mt-4 px-4 py-2 bg-linear-to-r from-[#DF8908] to-[#B415FF] text-white rounded-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 shadow-lg rounded-2xl max-w-2xl mx-auto bg-gray-800">
          <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
          <img
            src={selectedProject.image}
            className="w-full h-60 object-cover rounded-lg mt-4"
          />
          <p className="mt-4">
            <strong>Tech Stack:</strong> {selectedProject.stack}
          </p>
          <p className="mt-2">
            <strong>Description:</strong> {selectedProject.description}
          </p>
          <p className="mt-2">
            <strong>Challenges:</strong> {selectedProject.challenges}
          </p>
          <p className="mt-2">
            <strong>Future Plans:</strong> {selectedProject.improvements}
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Live Project
            </a>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repository
            </a>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            Back to Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default MyWork;
