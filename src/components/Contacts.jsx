import gsap from "gsap";
import { useEffect, useRef } from "react";

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
    <section className="size-full p-5 fixed top-0 left-0" ref={contactsRef}>
      <div className="border border-gray-300 size-full relative rounded-lg bg-gray-50/10 backdrop-blur-sm overflow-hidden">
        <button
          onClick={() => handleCloseClick()}
          className="absolute right-2  p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="text-center text-2xl p-5 underline tracking-widest">
          Contacts
        </h2>
      </div>
    </section>
  );
};

export default Contacts;
