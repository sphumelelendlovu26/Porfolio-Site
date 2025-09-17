import Scene from "./components/Scene";
import { useState } from "react";
import Projects from "./components/Projects";

const App = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [isOpenLaptop, setIsOpenLaptop] = useState(false);

  return (
    <main className="h-[100vh] border">
      <Scene
        projectsOpen={projectsOpen}
        setProjectsOpen={setProjectsOpen}
        setIsOpenLaptop={setIsOpenLaptop}
        isOpenLaptop={isOpenLaptop}
      />
      {projectsOpen && (
        <div className="absolute inset-0 flex justify-center items-start  pointer-events-auto z-10">
          <Projects
            setIsOpenLaptop={setIsOpenLaptop}
            setProjectsOpen={setProjectsOpen}
          />
        </div>
      )}
    </main>
  );
};

export default App;
