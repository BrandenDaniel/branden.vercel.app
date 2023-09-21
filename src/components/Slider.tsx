import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";

type Props = {
  previousWork: string[];
  nextWork: string[];
};

const Slider = (props: Props) => {
  return (
    <div className="slider">
      <Link href={`/work/${props.previousWork[0]}`}>
        <CgArrowLeft />
        {props.previousWork[1]}
      </Link>
      <Link href={`/work/${props.nextWork[0]}`}>
        {props.nextWork[1]}
        <CgArrowRight />
      </Link>
    </div>
  );
};

export default Slider;
