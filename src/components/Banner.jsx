import Typed from "typed.js";
import { useEffect, useRef } from "react";
import bannerImage from '../assets/bi1.jpg'
import bannerbg from '../assets/banner_wallpaper.svg'
import resume from '../assets/SawantSaurabh.pdf'

function Banner() {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer", "Full-Stack Developer", "Frontend Developer", "Backend Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop:true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
    }, []);
    
  return (
    <>
    <div style={{
                backgroundImage : `url(${bannerbg})`,
                backgroundSize :"cover"
            }} className="main-container flex items-center">
        {/* First Dbba */}
            <div  className="w-full flex justify-center text-white items-center">
            {/* {text} */}
            <div className="w-3/4 space-y-3  ms-10 items-center" >
                <h3 className="text-2xl font-semibold">Hi, I am</h3>
                <h1 className="text-4xl font-bold">Saurabh Sawant</h1>
                <h2 className="text-3xl">
                    I am a <span className="font-bold" ref={el}></span>
                </h2>
                <p className="mt-4 text-base">
                Dedicated and skilled software engineer with a B.Tech in Information Technology and a CGPA of 9.69. Proficient in Java, JavaScript, HTML, CSS, Tailwind CSS, React JS, and Spring Boot. Experienced in developing and maintaining software solutions, managing account opening processes, and specializing in Fintech solutions. Seeking to leverage my technical skills and industry experience in a dynamic organization to contribute to innovative projects and drive continuous improvement.
                </p>

                <div className="icon-container space-x-4 flex">
                    <a className="bg-gray-700 w-12 h-12 cursor-pointer border-white rounded-full flex justify-center items-center hover:shadow-lg" href="https://www.linkedin.com/in/saurabhsawant077/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands text-2xl fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Saurabhsawant77" target="_blank" rel="noopener noreferrer"  className="bg-gray-700 w-12 h-12 cursor-pointer border-white rounded-full flex justify-center items-center hover:shadow-lg">
                    <i class="fa-brands text-2xl fa-github"></i>
                    </a>
                    <a className="bg-gray-700 w-12 h-12 cursor-pointer border-white rounded-full flex justify-center items-center hover:shadow-lg">
                    <i class="fa-brands text-2xl fa-instagram"></i>
                    </a>
                
                
                
                </div>

                <br />
            <a className=" " href={resume} target="_blank" rel="noopener noreferrer"><button className=" mb-4 px-3 py-2 hover:shadow-lg hover:text-black bg-orange-400 rounded-lg text-xl"> Download Cv</button></a>

            </div>
        </div>

        {/* Second dabba */}

        <div className="w-full flex justify-center items-center p-2">
            {/* {image} */}
            <img className="sm:w-1/2 rounded-full shadow-lg " src={bannerImage} alt="My Image" />
        </div>
    </div>
    </>
  )
}

export default Banner