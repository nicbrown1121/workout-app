import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MuscleGroup from "./components/MuscleGroup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/muscleGroup" element={<MuscleGroup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
