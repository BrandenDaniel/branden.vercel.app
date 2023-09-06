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
    <div className="home container">
      <Banner />
      <TechStack />

      <section className="home__featured">
        <div className="home__featured-projects">
          <h2>
            Projects
            <Link href="/projects">
              other projects <CgArrowRight />
            </Link>
          </h2>

          <div className="home__featured-projects-container">
            {ProjectData.projects.map(
              (item, i) =>
                i < 2 && (
                  <ProjectItem
                    key={item.name}
                    previewGif={item.previewGif}
                    position={item.postion}
                    URL={item.URL}
                    ghRepo={item.ghRepo}
                    name={item.name}
                    techStack={item.techStack}
                  />
                )
            )}
          </div>
        </div>

        <div className="home__featured-work">
          <h2>
            Work
            <Link href="/work">
              other work <CgArrowRight />
            </Link>
          </h2>

          <div className="home__featured-work-container">
            {WorkData.map(
              (item, i) =>
                i < 2 && (
                  <WorkItem
                    key={item.caseStudy.title}
                    id={item.caseStudy.id}
                    thumbnail={item.caseStudy.thumbnail}
                    thumbnailPosition={item.caseStudy.thumbnailPosition}
                    title={item.caseStudy.title}
                    techStack={item.caseStudy.techStack}
                  />
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
