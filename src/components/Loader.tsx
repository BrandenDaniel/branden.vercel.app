import { Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <div className="loader container">
      <Skeleton
        variant="rounded"
        height={23}
        sx={{
          backgroundColor: "rgba(255,255,255,.1)",
          width: "25%",
          marginBottom: "20px",
        }}
      />

      <Skeleton
        variant="rounded"
        height={15}
        sx={{
          backgroundColor: "rgba(255,255,255,.1)",
          width: "50%",
        }}
      />

      <Skeleton
        variant="rounded"
        height={15}
        sx={{
          backgroundColor: "rgba(255,255,255,.1)",
          width: "50%",
        }}
      />

      <Skeleton
        variant="rounded"
        height={15}
        sx={{
          backgroundColor: "rgba(255,255,255,.1)",
          width: "50%",
        }}
      />
    </div>
  );
};

export default Loader;
