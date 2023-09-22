"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  thumbnail: string;
  thumbnailPosition?: string;
  title: string;
  shortDesc?: string;
  techStack: string[];
};

const scrollToTop = () => {
  document.body.scrollTop = 0;
};

const workItem = (props: Props) => {
  return (
    <div className="workItem">
      <div className="workItem__thumbnail">
        <Link href={`work/${props.id}`} onClick={scrollToTop}>
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
        </Link>
      </div>
      <div className="workItem__content">
        <div className="workItem__content-name">
          <p>{props.title}</p>
        </div>
        {props.shortDesc && (
          <p className="workItem__content-desc">{props.shortDesc}</p>
        )}
        <div className="workItem__content-tech">
          {props.techStack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default workItem;
