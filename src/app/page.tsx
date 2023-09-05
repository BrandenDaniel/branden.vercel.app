import Banner from "@/components/Banner";
import ProjectItem from "@/components/ProjectItem";
import WorkItem from "@/components/WorkItem";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";
import ProjectData from "../data/proj-data.json";
import WorkData from "../data/work-data.json";

const page = () => {
  return (
    <div className="home">
      <Banner />
      <TechStack />

      <section className="home__featuredProjects">
        <h2>
          Projects
          <Link href="/projects">
            other projects <CgArrowRight />
          </Link>
        </h2>

        <div className="home__featuredProjects-container">
          {ProjectData.projects.map(
            (item, i) =>
              i < 2 && (
                <ProjectItem
                  key={item.name}
                  previewGif={item.previewGif}
                  URL={item.URL}
                  ghRepo={item.ghRepo}
                  name={item.name}
                  techStack={item.techStack}
                />
              )
          )}
        </div>
      </section>

      <section className="home__featuredWork">
        <h2>
          Work
          <Link href="/work">
            other work <CgArrowRight />
          </Link>
        </h2>

        <div className="home__featuredWork-container">
          {WorkData.map(
            (item, i) =>
              i < 2 && (
                <WorkItem
                  key={item.title}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  techStack={item.techStack}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
