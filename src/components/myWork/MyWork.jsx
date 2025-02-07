import { useState } from "react";


const projects = [
    {
      name: "Prescripto",
      image: "https://github.com/showrov4g/Doctor-protal/blob/main/public/ss.jpeg",
      stack: "React, tailwind",
      description: "A web application that allows users to manage appointment for doctors",
      liveLink: "https://serene-crumble-e9ce54.netlify.app/",
      github: "https://github.com/showrov4g/Doctor-protal",
      challenges: "Optimizing user experience",
      improvements: "Add database to store user and doctors data"
    },
    {
      name: "Gadget-Heaven",
      image: "https://github.com/showrov4g/Gadget-Heaven/blob/main/public/Screenshot%202024-11-07%20at%2000-03-39%20AllProductCard.png",
      stack: "React js, Tailwind CSS, dasiUI",
      description: "This is a electronic item website",
      liveLink: "https://legendary-sherbet-6a85d6.netlify.app/",
      github: "https://github.com/showrov4g/Gadget-Heaven",
      challenges: "Implementing WebSockets for user authentication",
      improvements: "Integrating payment method for collecting payment from user"
    },
    {
      name: "Hostel management",
      image: "https://github.com/showrov4g/hostel-management/blob/main/public/full.jpeg",
      stack: "React js, tailwind, firebase, mongoDb",
      description: "An e-commerce platform with secure payments.",
      liveLink: "https://example.com",
      github: "https://github.com/showrov4g/hostel-management",
      challenges: "Ensuring secure transactions and scalability.",
      improvements: "Adding AI-driven product recommendations."
    }
  ];

const MyWork = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    return (
        <div>
            
        </div>
    );
};

export default MyWork;