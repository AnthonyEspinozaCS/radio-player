import { useState } from "react";
import "./App.css";
import Radio from "./components/Radio";

function App() {
  const userStatus = useState(0);
  return (
    <>
      <h1>Radio 2k</h1>
      <Radio />
    </>
  );
}

export default App;
