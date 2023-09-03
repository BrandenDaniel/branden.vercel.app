import React from "react";

const TechStack = () => {
  return (
    <div className="techStack">
      <div>
        <p>
          HTML <span>4 years</span>
        </p>
      </div>

      <div>
        <p>
          CSS <span>4 years</span>
        </p>
        <p>
          Sass <span>4 years</span>
        </p>
      </div>
      <div>
        <p>
          JavaScript <span>3 years</span>
        </p>
        <p>
          React.js <span>2 year</span>
        </p>
        <p>
          Next.js <span>{`< 1 year`}</span>
        </p>
        <p>
          TypeScript <span>{`< 1 year`}</span>
        </p>
      </div>
    </div>
  );
};

export default TechStack;
