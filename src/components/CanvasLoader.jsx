import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center className="flex justify-center items-center flex-col">
      <svg className="w-10 h-10 mb-4 animate-spin" viewBox="0 0 50 50">
        <circle
          className="text-purple-500"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="90"
          strokeDashoffset="0"
        />
      </svg>
      <p className="text-sm text-white">
        Fetching Resources{" "}
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
