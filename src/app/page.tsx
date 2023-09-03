import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import ProjectItem from "@/components/ProjectItem";
import TechStack from "@/components/TechStack";
import React from "react";

const page = () => {
  return (
    <main className="home container">
      <Nav />
      <Banner />
      <TechStack />

      <div className="home__featuredProjects">
        <h2>Projects</h2>
        <ProjectItem />
      </div>
    </main>
  );
};

export default page;
