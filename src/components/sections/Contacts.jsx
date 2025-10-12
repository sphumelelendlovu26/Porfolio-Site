import React, { lazy, useEffect, useRef } from "react";
import "boxicons";
const ContactForm = lazy(() => import("../ContactForm"));

const Contacts = ({ setContactsOpen }) => {
  const contactsRef = useRef();

  const handleCloseClick = () => {
    setContactsOpen(false);
  };
  useEffect(() => {
    const loadGsap = async () => {
      if (contactsRef.current) {
        const gsap = await import("gsap");
        gsap.fromTo(
          contactsRef.current,
          { opacity: 0, scale: 0.1, x: 100, y: -100 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            x: 0,
            y: 0,
          }
        );
        gsap.fromTo(
          ".stagger",
          {
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.3,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            ease: "power3.out",
          }
        );
      }
    };
    loadGsap();
  }, []);

  return (
    <section className="fixed top-0 left-0 size-full " ref={contactsRef}>
      <div className="border stagger top-1/2 max-w-2xl   left-1/2 translate-x-[-50%] translate-y-[-50%] border-gray-500 bg-gray-900/20 page sm:w-1/2 size-4/5  absolute  rounded-lg  backdrop-blur-sm overflow-hidden">
        <button
          onClick={() => handleCloseClick()}
          className="absolute right-2  p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="text-center stagger tracking-widest ">TALK TO ME </h2>
        <div className="flex items-center  h-10 justify-around">
          <h3 className="stagger">
            Checkout my socials
            <div className="linksContainer  flex justify-around">
              <a
                className=" text-lg animation-duration-5000  hover:text-gray-700"
                href="https://github.com/sphumelelendlovu26/"
                target="_blank"
              >
                <box-icon
                  className="animate-bounce ml-10"
                  type="logo"
                  name="github"
                ></box-icon>{" "}
              </a>
              <a
                className=" text-lg animation-duration-5000  hover:text-gray-700"
                href="https://github.com/sphumelelendlovu26/"
                target="_blank"
              >
                <box-icon type="logo" name="instagram"></box-icon>
              </a>
            </div>
          </h3>{" "}
        </div>
        <h3 className="text-center stagger">
          OR <br /> Send Me An Email Below
        </h3>
        <div className="stagger">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contacts);
