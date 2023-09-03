import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import ProjectItem from "@/components/ProjectItem";
import TechStack from "@/components/TechStack";
import React from "react";
import ProjectData from "../data/proj-data.json";

const page = () => {
  return (
    <main className="home container">
      <Nav />
      <Banner />
      <TechStack />

      <div className="home__featuredProjects">
        <h2>Projects</h2>

        <div className="home__featuredProjects-container">
          {ProjectData.projects.map(
            (item, i) =>
              i < 2 && (
                <ProjectItem
                  key={item.name}
                  previewGif={item.previewGif}
                  URL={item.URL}
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
