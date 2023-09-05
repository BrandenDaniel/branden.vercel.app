import React from "react";
import WorkData from "../../../data/work-data.json";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

const page = ({ params }: Params) => {
  const selectedItem = WorkData.find((item) => item.caseStudy.id === params.id);

  return (
    <>
      {selectedItem ? (
        <div className="caseStudy">
          <header>
            <h1>{selectedItem?.caseStudy.title}</h1>
            <p>{selectedItem?.caseStudy.longDesc}</p>
            <div className="caseStudy__details">
              <span>{selectedItem?.caseStudy.year}</span>
              <div>{selectedItem?.caseStudy.techStack}</div>
            </div>
          </header>

          <div className="caseStudy__preview">
            <h2>Static preview</h2>
          </div>
        </div>
      ) : (
        <p className="work-not-found">
          I have not gotten around that one yet.{" "}
          <Link href="/work">Back to work</Link>
        </p>
      )}
    </>
  );
};

export default page;
