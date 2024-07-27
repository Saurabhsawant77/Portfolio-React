import React, { useState } from 'react'

function Header() {
    const [brandName, setBrandName] = useState("Saurabh Swant");
    const [menuLinks, setMenuLinks] = useState([
        { title: "Home", link: "#home", id: 1 },
        { title: "About", link: "#about", id: 2 },
        { title: "Services", link: "#services", id: 3 },
        { title: "Skills", link: "#skills", id: 4 },
        { title: "Contact", link: "#contact", id: 5 }
    ]);

    const [actionButton, setActionButton] = useState({
        title: "Hire Me",
        link: `saurabhsawant077@gmail.com`
    });

    return (
        <>
            <header className="bg-gray-100 p-4 w-full">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                    {/* Brand Logo */}
                    <div className="text-2xl font-bold font-serif mb-4 sm:mb-0">
                        <h1>
                            Saur<span className="bg-orange-300 font-bold p-2 rounded-lg">HUB</span>
                        </h1>
                    </div>

                    {/* Menu Links */}
                    <nav className="  flex flex-col sm:flex-row sm:space-x-4 text-base mb-4 sm:mb-0 text-center">
                        {menuLinks.map((link) => (
                            <a key={link.id} href={link.link} className="hover:text-orange-400 hover:bg-gray-500 rounded-lg p-2 sm:p-4">
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div>
                        <a href={`mailto:${actionButton.link}`}>
                            <button className="bg-purple-400 p-2 sm:p-4 rounded-lg hover:shadow-xl hover:font-semibold text-sm sm:text-lg">
                                {actionButton.title}
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
