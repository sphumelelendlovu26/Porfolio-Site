import Scene from "./components/Scene";
import { useState } from "react";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts";
import { div } from "three/tsl";
import AboutMe from "./components/sections/AboutMe";

const App = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [isOpenLaptop, setIsOpenLaptop] = useState(false);
  const [contactsOpen, setContatsOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  return (
    <main className="h-[100vh] border">
      <Scene
        projectsOpen={projectsOpen}
        setProjectsOpen={setProjectsOpen}
        setIsOpenLaptop={setIsOpenLaptop}
        isOpenLaptop={isOpenLaptop}
        setContactsOpen={setContatsOpen}
        isAboutMeOpen={isAboutMeOpen}
        setIsAboutMeOpen={setIsAboutMeOpen}
      />
      {projectsOpen && (
        <div className="absolute inset-0 flex justify-center items-start  pointer-events-auto z-10">
          <Projects
            setIsOpenLaptop={setIsOpenLaptop}
            setProjectsOpen={setProjectsOpen}
            isOpenLaptop={isOpenLaptop}
          />
        </div>
      )}
      {contactsOpen && <Contacts setContactsOpen={setContatsOpen} />}
      {isAboutMeOpen && <AboutMe />}
    </main>
  );
};

export default App;
