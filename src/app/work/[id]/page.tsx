import WorkData from "../../../data/work-data.json";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLeft } from "react-icons/cg";

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
          <Link href="/work" className="caseStudy__back">
            <CgArrowLeft />
          </Link>
          <header>
            <h1>{selectedItem?.caseStudy.title}</h1>
            <p>{selectedItem?.caseStudy.longDesc}</p>
            <div className="caseStudy__details">
              <span>{selectedItem?.caseStudy.year}</span>
              <div>
                {selectedItem &&
                  selectedItem.caseStudy.techStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
              </div>
            </div>
          </header>

          <div className="caseStudy__preview">
            <h2>Static preview</h2>

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
