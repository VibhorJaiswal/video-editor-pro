import ToolsDiv from "./ToolsDiv.js";
import AllVideosDiv from "./AllVideosDiv.js";
import CurrentVideoDiv from "./CurrentVideoDiv.js";
import TimelineDiv from "./TimelineDiv.js";
import LoginPage from "./LoginPage.js";
import { useState } from "react";

function App() {
  const [currentPage, changeCurrentPage] = useState(false); //false for login page

  const handleCurrentPage = (e) => {
    console.log('changing page');
    changeCurrentPage(!currentPage);
  };

  console.log("togglePage: ", handleCurrentPage);

  return (
    <>
      {!currentPage && <LoginPage methods={changeCurrentPage} handleCurrentPage={handleCurrentPage} />}
      {currentPage && (
        <>
      <ToolsDiv />
      <AllVideosDiv />
      <CurrentVideoDiv />
      <TimelineDiv />
    </>
      )}
    </>
  );
}

export default App;
