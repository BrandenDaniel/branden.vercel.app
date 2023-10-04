import Image from "next/image";
import Link from "next/link";
import { IoLinkOutline } from "react-icons/io5";
import { TbBrandGithub } from "react-icons/tb";

type Props = {
  previewGif: string;
  position?: string;
  URL: string;
  ghRepo: string;
  name: string;
  desc?: string;
  techStack: string[];
};

const ProjectItem = (props: Props) => {
  return (
    <div className="projectItem">
      <div className="projectItem__thumbnail">
        <Link href={props.URL} target="_blank">
          <Image
            src={props.previewGif}
            alt={props.name}
            fill={true}
            style={{
              objectPosition: props.position ? props.position : "center",
            }}
          />
        </Link>
      </div>
      <div className="projectItem__content">
        <div className="projectItem__content-name">
          <p>{props.name}</p>
          <div className="projectItem__content-external">
            <Link
              href={props.ghRepo}
              target="_blank"
              aria-label="external link to project Github repository"
            >
              <TbBrandGithub />
            </Link>
            <Link
              href={props.URL}
              target="_blank"
              aria-label="external link to website"
            >
              <IoLinkOutline />
            </Link>
          </div>
        </div>
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
