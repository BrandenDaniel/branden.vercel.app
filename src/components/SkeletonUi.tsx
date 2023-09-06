import { Skeleton } from "@mui/material";

const SkeletonUi = () => {
  return (
    <div className="skeleton skeleton--card container">
      <div className="skeleton--card__item">
        <div className="skeleton--card__thumbnail">
          <Skeleton variant="rectangular" />
        </div>

        <div className="skeleton--card__content">
          <Skeleton variant="text" />

          <div className="skeleton--card__content-desc">
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>

          <div className="skeleton--card__content-stack">
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
        </div>
      </div>

      <div className="skeleton--card__item">
        <div className="skeleton--card__thumbnail">
          <Skeleton variant="rectangular" />
        </div>

        <div className="skeleton--card__content">
          <Skeleton variant="text" />

          <div className="skeleton--card__content-desc">
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>

          <div className="skeleton--card__content-stack">
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonUi;
