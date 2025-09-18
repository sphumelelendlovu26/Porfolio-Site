import gsap from "gsap";
import { useEffect, useRef } from "react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      const elements = cardRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef} className="size-full p-5 rounded-lg  shadow-md">
      <h2 className="animate-item mb-4 text-xl">{project.title}</h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <div className="animate-item mb-4  border rounded overflow-clip">
          <img src={project.previewImage} alt={project.alt} />
        </div>
        <div className="animate-item flex flex-col items-center  p-5 justify-around gap-2">
          <p>{project.description}</p>
          <a
            className="border rounded p-1 w-1/3 text-center shadow-md"
            href={project.link}
            target="_blank"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
