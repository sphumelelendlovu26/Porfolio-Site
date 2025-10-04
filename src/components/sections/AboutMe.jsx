import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutMe = ({ isAboutMeOpen, setIsAboutMeOpen }) => {
  const AboutMeRef = useRef();

  function handleCloseClick() {
    if (isAboutMeOpen) {
      setIsAboutMeOpen(false);
    }
  }

  useEffect(() => {
    if (AboutMeRef.current) {
      gsap.fromTo(
        AboutMeRef.current,
        { x: -52, y: 12, height: 185, width: 270 },
        {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          width: "100%",
          height: "100%",
        }
      );
      // about me <p> animation
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
  }, [[isAboutMeOpen]]);

  return (
    <section className="fixed top-0 left-0 size-full ">
      {" "}
      <div
        ref={AboutMeRef}
        className="border  top-1/2 max-w-2xl   left-1/2 translate-x-[-50%] translate-y-[-50%] border-gray-500 bg-gray-900/20 page sm:w-1/2 size-4/5  absolute  rounded-lg  backdrop-blur-sm overflow-hidden"
      >
        <button
          onClick={() => handleCloseClick()}
          className="stagger absolute right-2 p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="stagger text-center sm:text-xl tracking-widest">
          About Me
        </h2>

        <div className=" space-y-10 sm:text-lg flex flex-col gap-6">
          <p className="stagger">
            Hi, I’m{" "}
            <span className="text-blue-400 font-semibold">Sphumelele</span> — a
            passionate front-end developer from South Africa who loves turning
            ideas into beautiful, interactive websites.
          </p>
          <p className="stagger">
            I focus on building responsive, user-friendly web applications using{" "}
            <span className="text-green-400">React</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
            <span className="text-yellow-400">JavaScript</span>.
          </p>
          <p className="stagger">
            Right now, I’m sharpening my skills in{" "}
            <span className="text-purple-400">
              3D web development (Three.js)
            </span>{" "}
            and <span className="text-pink-400">GSAP animations</span>, while
            building real-world projects for my portfolio.
          </p>
          <p className="stagger">
            Outside of coding, I enjoy gaming, raising my kids, and exploring
            new tech tools that make me a better developer.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
