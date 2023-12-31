import WorkData from "../../data/work-data.json";
import WorkItem from "@/components/WorkItem";

const page = () => {
  return (
    <section className="work container">
      <h1>Work</h1>

      <div className="work__items">
        {WorkData.map((item) => (
          <WorkItem
            key={item.caseStudy.title}
            id={item.caseStudy.id}
            thumbnail={item.caseStudy.thumbnail}
            thumbnailPosition={item.caseStudy.thumbnailPosition}
            title={item.caseStudy.title}
            shortDesc={item.caseStudy.shortDesc}
            techStack={item.caseStudy.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
