import { lazy, useLayoutEffect, useRef } from "react";

const ProjectCard = lazy(() => import("../ProjectCard"));
const swiftbuy = lazy(() => import("../../images/swiftbuy-preview.JPG"));
const Projects = ({ setProjectsOpen, setIsOpenLaptop, isOpenLaptop }) => {
  const projectsRef = useRef();

  useLayoutEffect(() => {
    const loadGsap = async () => {
      if (projectsRef.current) {
        const gsap = await import("gsap");
        gsap.fromTo(
          projectsRef.current,
          { opacity: 0, scale: 0.1, x: -200, y: -100, borderRadius: 100 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            x: 0,
            y: 0,
            delay: 1,
          }
        );
      }
    };
    loadGsap();
  }, []);

  //x button click
  const handleCloseClick = () => {
    setProjectsOpen(false);

    if (!isOpenLaptop) {
      setIsOpenLaptop(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "SWIFTBUY-SA",
      link: "https://swiftbuysa.vercel.app/",
      previewImage: swiftbuy,
      alt: "",
      description: `SWIFTBUY-SA is a frontend e-commerce platform built for South Africa, allowing users to browse products and simulate the shopping experience.  This project focuses entirely on the user interface and experience, with no backend or database integration.`,
    },
  ];

  return (
    <section className="size-full p-10 " ref={projectsRef}>
      <div className="border  p-10 size-full relative rounded-sm border-gray-500 overflow-clip bg-gray-900/20 backdrop-blur-sm  page">
        <button
          onClick={() => handleCloseClick()}
          className="absolute right-2  p-2 rounded text-red-500 top-1"
        >
          x
        </button>
        <h2 className="text-center sm:text-2xl text-lg p-5 underline tracking-widest stagger">
          Projects
        </h2>
        <div className="h-full overflow-y-scroll ">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
