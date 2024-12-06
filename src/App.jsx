import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}></NavBar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  );
};

export default App;
