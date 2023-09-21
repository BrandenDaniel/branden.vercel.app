import WorkData from "../../../data/work-data.json";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLeft } from "react-icons/cg";
import Slider from "@/components/Slider";

type Params = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Params) => {
  const selectedItem = WorkData.find((item) => item.caseStudy.id === params.id);
  return (
    <>
      {selectedItem ? (
        <div className="caseStudy caseStudy--container">
          <div className="caseStudy__back">
            <Link href="/work">
              <CgArrowLeft />
            </Link>
          </div>
          <header>
            <h1>{selectedItem?.caseStudy.title}</h1>
            {selectedItem?.caseStudy.longDesc.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <div className="caseStudy__details">
              <span>{selectedItem?.caseStudy.year}</span>
              <div>
                {selectedItem &&
                  selectedItem.caseStudy.techStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
              </div>
            </div>
            <Slider
              previousWork={selectedItem.caseStudy.previousWork}
              nextWork={selectedItem.caseStudy.nextWork}
            />
          </header>
          <div className="caseStudy__preview">
            <h2>Static preview </h2>

            <div>
              {selectedItem &&
                selectedItem.caseStudy.snapshot.map((item) => (
                  <Image
                    key={item}
                    src={item}
                    alt={`${selectedItem.caseStudy.title} snapshot preview`}
                    width={850}
                    height={100}
                  />
                ))}
            </div>
            <Slider
              previousWork={selectedItem.caseStudy.previousWork}
              nextWork={selectedItem.caseStudy.nextWork}
            />
          </div>
        </div>
      ) : (
        <p className="work-not-found">
          {`I haven't gotten around that one yet.`}
          <Link href="/work">Back to work</Link>
        </p>
      )}
    </>
  );
};

export default Page;
