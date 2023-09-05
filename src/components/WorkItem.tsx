import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  thumbnail: string;
  thumbnailPosition?: string;
  title: string;
  shortDesc?: string;
  techStack: string[];
};

const ProjectItem = (props: Props) => {
  return (
    <div className="projectItem">
      <div className="projectItem__thumbnail">
        <Image
          src={props.thumbnail}
          alt={props.title}
          fill={true}
          style={{
            objectPosition: props.thumbnailPosition
              ? props.thumbnailPosition
              : "center",
          }}
        />
      </div>
      <div className="projectItem__content">
        <div className="projectItem__content-name">
          <p>{props.title}</p>
        </div>
        {props.shortDesc && (
          <p className="projectItem__content-desc">{props.shortDesc}</p>
        )}
        <div className="projectItem__content-tech">
          {props.techStack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
