import { Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="skeleton skeleton--caseStudy">
      <Skeleton
        variant="circular"
        width={35}
        height={35}
        sx={{ marginBottom: "20px" }}
      />

      <div className="skeleton--caseStudy__header">
        <Skeleton variant="text" sx={{ fontSize: "28px", width: "150px" }} />

        <div>
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px", width: "50%" }} />
        </div>

        <div>
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px" }} />
          <Skeleton variant="text" sx={{ fontSize: "19px", width: "50%" }} />
        </div>

        <div className="skeleton--caseStudy__stack">
          <Skeleton variant="text" sx={{ fontSize: "19px", width: "40px" }} />
          <Skeleton variant="text" sx={{ fontSize: "12px", width: "30px" }} />
          <Skeleton variant="text" sx={{ fontSize: "12px", width: "30px" }} />
          <Skeleton variant="text" sx={{ fontSize: "12px", width: "30px" }} />
          <Skeleton variant="text" sx={{ fontSize: "12px", width: "30px" }} />
          <Skeleton variant="text" sx={{ fontSize: "12px", width: "30px" }} />
        </div>
      </div>
    </div>
  );
}
