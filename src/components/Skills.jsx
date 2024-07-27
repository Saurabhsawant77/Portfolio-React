// import React from "react";
// import bannerbg from '../assets/banner_wallpaper.svg'

// function Skills() {
//     return (
//         <>
//             <div className="my-10">
//                 <h1 className="text-4xl text-center"> My Skills </h1>

//                 {/* Skills Box */}

//                 <div
//                     style={{
//                         backgroundImage: `url(${bannerbg})`,
//                         backgroundSize: "cover"
//                     }}
//                     className="box-container flex my-16 items-center">
//                     <div className="flex justify-center ">
//                         {/* Text Container */}
//                         <div className=" w-2/3 text-center space-y-3">
//                             <h1 className="text-3xl font-semibold">
//                                 I Work on these Tecgnologies
//                             </h1>
//                             <p className="text-lg">
//                                 Technology is the campfire around which we tell our stories.
//                             </p>
//                             <button className="bg-orange-400 rounded-lg hover:shadow-lg hover:text-black px-2 py-2 text-xl">
//                                 Hire Me
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="border flex justify-center">
//                     {/* Skills section */}
//                     <div className="flex w-2/3 space-x-3 space-y-3 flex-wrap ">
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             Core Java
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             Spring Boot
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             React js
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             Javascript
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             Tailwind CSs
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             HTML
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             CSS
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             SQL
//                         </p>
//                         <p className="bg-slate-100 w-fit px-3 py-2 mt-3 rounded-full">

//                             Google Cloud platfrom
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// }

// export default Skills;

import bannerBackground from "../assets/banner_wallpaper.svg";
const Skills = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl  text-center">
          My Skills
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16">
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p className="text-lg">
              Technology continually evolves, driving innovation and transforming industries. Staying updated with technology is crucial for leveraging its benefits and staying competitive in a rapidly changing world.
              </p>
              <button className=" text-xl px-4 py-2 bg-orange-500 rounded-full hover:shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Rest APIs
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                SQL
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Google Cloud Platform
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Linux
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Git
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Github
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Software Testing
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Eclipse,Intellij IDE
              </p>




            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
