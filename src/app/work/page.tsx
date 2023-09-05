import React from "react";
import WorkData from "../../data/work-data.json";
import WorkItem from "@/components/WorkItem";

const page = () => {
  return (
    <section className="projects">
      <h1>Work</h1>

      <div className="projects__items">
        {WorkData.projects.map((item) => (
          <WorkItem
            key={item.title}
            thumbnail={item.thumbnail}
            thumbnailPosition={item.thumbnailPosition}
            title={item.title}
            techStack={item.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
