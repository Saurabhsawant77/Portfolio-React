import React, { useState } from 'react'

function Header() {
    const [brandName,setBrandName] = useState("Saurabh Swant")
    const [menuLinks,setmenuLinks] = useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/about",
            id:2,
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:3,
        },
        {
            title:"Contact",
            link:"/contact",
            id:4,
        }
    ])

    const [actionButton,setactionButton] = useState({
        title:"Hire Me",
        link:`saurabhsawant077@gmail.com`,
    })
  return (
    <>
    <div className="main flex bg-gray-100 h-15 items-center p-7 w-full justify-between">
        <div>
            {/* {Brand Logo} */}
            <h1 className="text-2xl font-bold font-serif">Saur<span className="bg-orange-300 font-bold p-2 rounded-lg m-0">HUB</span></h1>
        </div>

        <div className="space-x-4 text-base">
            {/* {menu links} */}
            {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-4">{link.title}</a>
            ))}   
            {/* <a href="/home" className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-4">Home</a> */}
            {/* <a href="/about" className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-4">About</a>
            <a href="/portfolio" className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-4">Portfolio</a>
            <a href="/contact" className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-4">Contact</a> */}
        </div>

        <div>
            {/* {button links} */}
           <a href={`mailto:${actionButton.link}`}> <button  className="bg-purple-400 p-4 m-auto rounded-lg hover:shadow-xl hover:font-semibold text-lg">{actionButton.title}</button></a>
        </div>
        
    </div>
    </>
  )
}

export default Header