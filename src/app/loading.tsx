import { Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="home__loader container">
      <div className="home__loader-profile">
        <Skeleton variant="circular" width={160} height={160} />
      </div>

      <div>
        <div className="home__loader-bio">
          <Skeleton variant="text" sx={{ fontSize: "28px" }} />
          <Skeleton variant="text" sx={{ fontSize: "17px" }} />
          <Skeleton variant="text" sx={{ fontSize: "17px", width: "50%" }} />
        </div>

        <div className="home__loader-socials">
          <div>
            <Skeleton variant="circular" width={23} height={23} />
            <Skeleton variant="circular" width={23} height={23} />
            <Skeleton variant="circular" width={23} height={23} />
          </div>

          <Skeleton variant="text" sx={{ fontSize: "17px" }} width={100} />
        </div>
      </div>
    </div>
  );
}
