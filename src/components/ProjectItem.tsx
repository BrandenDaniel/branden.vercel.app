import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLinkOutline } from "react-icons/io5";

type Props = {
  previewGif: string;
  URL: string;
  name: string;
  desc?: string;
  techStack: string[];
};

const ProjectItem = (props: Props) => {
  return (
    <div className="projectItem">
      <div className="projectItem__thumbnail">
        <Image src={props.previewGif} alt={props.name} fill={true} />
      </div>
      <div className="projectItem__content">
        <p className="projectItem__content-name">
          {props.name}
          <Link href={props.URL} target="_blank">
            <IoLinkOutline />
          </Link>
        </p>
        {props.desc && (
          <p className="projectItem__content-desc">{props.desc}</p>
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
