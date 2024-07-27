const Footer = () => {
  return (
      <>
          <div className="py-5 border bg-gray-100 flex flex-col sm:flex-row justify-between px-4 sm:px-12 md:px-24 lg:px-72" id="contact">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <p>
                      @2024 Saurabh Sawant <span className="font-semibold">All Rights Reserved</span>
                  </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                  <a href="#about" className="flex items-center justify-center sm:justify-start hover:underline">
                      <i className="fa-solid text-xl fa-address-card"></i>
                      <span className="ml-2">About</span>
                  </a>
                  <a href="mailto:saurabhsawant077@gmail.com" className="flex items-center justify-center sm:justify-start hover:underline">
                      <i className="fa-solid text-xl fa-square-envelope"></i>
                      <span className="ml-2">saurabhsawant077@gmail.com</span>
                  </a>
                  <a href="/about" className="flex items-center justify-center sm:justify-start hover:underline">
                      <i className="fa-solid text-lg fa-phone"></i>
                      <span className="ml-2">+91 8828357179</span>
                  </a>
              </div>
          </div>
      </>
  );
};

export default Footer;
