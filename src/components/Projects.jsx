import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import swiftbuy from "../images/swiftbuy-preview.JPG";

const Projects = ({ setProjectsOpen, setIsOpenLaptop, isOpenLaptop }) => {
  const projectsRef = useRef();

  useEffect(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, scale: 0.1, x: 100, y: -100 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", x: 0, y: 0 }
      );
    }
  });

  //x button click
  const handleCloseClick = () => {
    setProjectsOpen(false);

    if (!isOpenLaptop) {
      setIsOpenLaptop(false);
    }
    console.log("open laptop ?", isOpenLaptop);
  };

  const projects = [
    {
      id: 1,
      title: "SWIFTBUY-SA",
      link: "https://swiftbuysa.vercel.app/",
      previewImage: swiftbuy,
      alt: "",
      description:
        "SWIFTBUY-SA is a frontend e-commerce platform built for South Africa, allowing users to browse products and simulate the shopping experience. This project focuses entirely on the user interface and experience, with no backend or database integration.",
    },
  ];

  return (
    <section className="size-full p-5  " ref={projectsRef}>
      <div className="border border-gray-300 size-full relative rounded-lg bg-gray-50/10 backdrop-blur-xs overflow-hidden">
        <button
          onClick={() => handleCloseClick()}
          className="absolute right-2  p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="text-center text-2xl p-5 underline tracking-widest">
          Projects
        </h2>
        <div className="h-full overflow-y-scroll">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
