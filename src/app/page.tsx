import Banner from "@/components/Banner";
import ProjectItem from "@/components/ProjectItem";
import TechStack from "@/components/TechStack";
import React from "react";
import ProjectData from "../data/proj-data.json";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

const page = () => {
  return (
    <main className="home">
      <Banner />
      <TechStack />

      <div className="home__featuredProjects">
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
      </div>
    </main>
  );
};

export default page;
