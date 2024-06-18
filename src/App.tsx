import GameBoard from "./components/GameBoard";
import NewGame from "./components/NewGame";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </>
  );
}




export default App;
