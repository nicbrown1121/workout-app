// import React from 'react';
import { useNavigate } from "react-router-dom";
import { exercises } from "../data";

const MuscleGroups = () => {
  const navigate = useNavigate();
  const muscleGroups = Object.keys(exercises);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl">Choose A Workout</h1>
      <div className="pt-4">
        <ul className="space-y-2 text-black text-xl">
          {muscleGroups.map((muscleGroup) => (
            <li
              className="w-28 h-8 button pl-8 border-solid border-2 border-cyan-700 rounded-lg hover:bg-cyan-700 hover:text-white hover:cursor-pointer active:bg-cyan-800 active:text-gray-200"
              key={muscleGroup}
              onClick={() => navigate(`/muscleGroup/${muscleGroup}`)}
            >
              {muscleGroup}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MuscleGroups;
