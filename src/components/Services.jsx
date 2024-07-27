import React, { useState } from 'react'

function Services() {
    const [data,setData] = useState([{
        id:'1',
        title:"Frontend Development",
        description:"onfsjvbxrdcfvhgbtexrdcfvgxrdctfvetsxrdcfv",
        actionButton : {
            text : "Check ",
            actionLink:"/"
        },

    },
])
  return (
    <>

    <div className="services main-container py-10 ">
        <h1 className=" text-4xl text-center">My Services</h1>
        <div className="services-container space-x-3 px-3 flex mt-10">


   

        {/* {data.map((val)=>(
                <div className="service1 hover:bg-slate-300 bg-slate-200 text-center shadow-lg p-4 rounded-lg  space-y-4">
                    <h1 className="text-2xl ">{val.title}</h1>
                    <p>{val.description}</p>
                    <button className="bg-orange-400 px-3 py-2 text-xl hover:shadow-lg rounded-xl text-white">{val.actionButton.text}</button>
                </div>
    ))} */}
            <div className="service1 hover:bg-slate-300 bg-slate-200 text-center shadow-lg p-4 rounded-lg  space-y-4">
            <i class="fa-solid fa-code text-2xl"></i>
                <h1 className="text-2xl "> Frontend Development </h1>
                <p className="">
                Creating interactive and responsive websites involves user interface design, utilizing HTML, CSS, JavaScript, and frontend frameworks like React and AngularJS plugin. Implementing visually appealing web designs ensures a seamless user experience, while optimizing for different screen sizes. Ensuring cross-browser compatibility is essential for consistent performance across devices
                </p>
                <a href="https://github.com/Saurabhsawant77" target="_blank">
                <button className="bg-orange-400 px-3 py-2 text-xl hover:shadow-lg rounded-xl text-white">Check</button>
                </a>
            </div>
            <div className="service2 hover:bg-slate-300 bg-slate-200 text-center shadow-lg p-4 rounded-lg space-y-4">
            <i class="fa-solid fa-server text-2xl"></i>
            <h1 className="text-2xl "> Software Development </h1>
                <p>
                Developing robust software applications involves writing and debugging code, utilizing various programming languages such as Python script and JavaScript code. Employing version control systems like Git ensures collaborative and organized development. Testing and maintaining software is crucial to ensuring reliability, security, and performance in diverse operating environments.
                </p>
                <a href="https://github.com/Saurabhsawant77" target="_blank">
                <button className="bg-orange-400 px-3 py-2 text-xl hover:shadow-lg rounded-xl text-white">Check</button>
                </a>
            </div>
            <div className="service3 hover:bg-slate-300 bg-slate-200 text-center shadow-lg p-4 rounded-lg space-y-4">
            <i class="fa-solid fa-boxes-stacked text-2xl"></i>
            <h1 className="text-2xl "> Full Stack Development </h1>
                <p>
                Full stack developers possess skills in both frontend and backend technologies, enabling them to handle entire web development projects. They work with databases, server-side languages, and client-side scripting. This versatility allows for efficient problem-solving, code refactoring, and seamless API integration, ensuring smooth interaction between all application components.                  </p>
                <a href="https://github.com/Saurabhsawant77" target="_blank">
                <button className="bg-orange-400 px-3 py-2 text-xl hover:shadow-lg rounded-xl text-white">Check</button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services