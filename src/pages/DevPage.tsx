import dev from "../assets/devtitle.png";
import DevCard from "../components/DevCard";
import projects from "../data/projects";

const DevPage = () => {
  return (
    <>
      <div className="h-screen space-y-2">
        <div className="flex justify-center">
          <img src={dev} width="400px" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
          {projects.map((project) => (
            <DevCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DevPage;
