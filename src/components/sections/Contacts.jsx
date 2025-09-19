import gsap from "gsap";
import { useEffect, useRef } from "react";
import "boxicons";
import ContactForm from "../ContactForm";

const Contacts = ({ setContactsOpen }) => {
  const contactsRef = useRef();

  const handleCloseClick = () => {
    setContactsOpen(false);
  };
  useEffect(() => {
    if (contactsRef.current) {
      gsap.fromTo(
        contactsRef.current,
        { opacity: 0, scale: 0.1, x: 100, y: -100 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", x: 0, y: 0 }
      );
    }
  });

  return (
    <section
      className="fixed top-10 max-w-2xl size-2/3 left-1/2   translate-x-[-50%] traanslate-y-[-50%] p-10 w-1/2"
      ref={contactsRef}
    >
      <div className="border border-gray-300 size-full relative p-10 rounded-lg bg-gray-50/20 backdrop-blur-sm overflow-hidden">
        <button
          onClick={() => handleCloseClick()}
          className="absolute right-2  p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="text-center text-xl  p-4  tracking-widest">
          TALK TO ME
        </h2>
        <div className="flex  items-center h-15 justify-around">
          <h3>
            Checkout my socials
            <a
              className=" text-lg animation-duration-5000 hover:text-gray-700"
              href="https://github.com/sphumelelendlovu26/"
              target="_blank"
            >
              <box-icon
                className="animate-bounce ml-10"
                type="logo"
                name="github"
              ></box-icon>{" "}
            </a>
          </h3>{" "}
        </div>
        <h2 className="text-center">
          OR <br /> Send Me An Email Below
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
