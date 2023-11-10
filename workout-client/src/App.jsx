// import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToWorkouts = () => {
    navigate("/muscleGroup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl">Lets Workout!</h1>
      <div className="pt-4">
        <button
          className="w-48 h-10 button pl-5 pr-5 border-solid border-2 border-cyan-700 rounded-lg hover:bg-cyan-700 hover:text-white active:bg-cyan-800 active:text-gray-200"
          onClick={goToWorkouts}
        >
          Start Workout
        </button>
      </div>
    </div>
  );
};

export default Home;
