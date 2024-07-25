import React, { useState } from 'react';
import bannerImage from '../assets/bi2.jpg';

function About() {
  const [values, setValues] = useState({
    image: bannerImage,
    title: "Software Engineer & Java Developer",
    desc1: `My goal is to leverage my skills to create impactful software that enhances user experience and solves real-world problems.`,
    desc2: `I am Saurabh Sawant, a passionate and dedicated software engineer with a B.Tech in Information Technology from Pillai College of Engineering. With a strong technical foundation in Java, JavaScript, React JS, and more, I specialize in developing and maintaining innovative software solutions. Currently working at Newgen Software Technologies Limited, I have experience in Fintech solutions, specifically in the Trade & Finance domain and Bank Account Opening Processes. I am a quick learner, adaptable, and committed to continuous self-development.`,
    actionButton: {
      title: "Read More...",
      link: '/readmore'
    }
  });

  return (
    <div className="about-container bg-gray-100 py-10 border border-gray-300">
      <h1 className="text-3xl md:text-4xl lg:text-4xl text-center mb-8 hover:text-orange-500">About me</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mx-4 lg:mx-10">
        {/* Image container */}
        <div className="max-w-xl flex justify-center mb-8 lg:mb-0">
          <img className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full" src={values.image} alt="Saurabh Sawant" />
        </div>

        {/* Text container */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full lg:w-1/2 text-center lg:text-left">
          <div className="space-y-6"> {/* Increased space between elements */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{values.title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">{values.desc1}</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">{values.desc2}</p>
            <div className="mt-6"> {/* Added margin-top for button spacing */}
              <a href={values.actionButton.link}>
                <button className="bg-orange-500 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-lg text-white rounded-lg">
                  {values.actionButton.title}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
