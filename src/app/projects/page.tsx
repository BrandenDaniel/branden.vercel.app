import React from "react";
import ProjectData from "../../data/proj-data.json";
import ProjectItem from "@/components/ProjectItem";

const page = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects__items">
        {ProjectData.projects.map((item) => (
          <ProjectItem
            key={item.name}
            previewGif={item.previewGif}
            URL={item.URL}
            ghRepo={item.ghRepo}
            name={item.name}
            techStack={item.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
