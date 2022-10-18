import ToolsDiv from "./ToolsDiv.js";
import AllVideosDiv from "./AllVideosDiv.js";
import CurrentVideoDiv from "./CurrentVideoDiv.js";
import TimelineDiv from "./TimelineDiv.js";
import LoginPage from "./LoginPage.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [currentPage, changeCurrentPage] = useState(true); //false for login page
  const [uploadedVideo, changeUploadedVideo] = useState({});
  const [username, changeusername] = useState("baman");
  const [editType, changeEditType] = useState("none");
  const [currentVideo, changeCurrentVideo] = useState("");

  const handleUsername = (e) => {
    // console.log(e.target.value);
    changeusername(e.target.value);
  };

  const handleCurrentPage = (e) => {
    console.log("changing page");
    changeCurrentPage(!currentPage);
  };

  const handleUploadVideo = (e) => {
    changeUploadedVideo(e.target.files[0]);
  };

  const handleEditType = (e) => {
    changeEditType(e);
  };

  //To upload video to server.
  useEffect(() => {
    if (uploadedVideo === {}) return;

    const url =
      "https://5000-vibhorjaisw-videoeditor-1846ju1x2au.ws-us71.gitpod.io/upload";

    // console.log('upload video: ',uploadedVideo);

    const formData = new FormData();
    formData.append("file", uploadedVideo);
    formData.append("name", uploadedVideo.name);
    formData.append("username", username);

    fetch(url, {
      method: "POST", // or 'PUT'
      body: formData,
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        changeCurrentVideo(uploadedVideo.name);
      });
  }, [uploadedVideo]);


  useEffect(() => {
    console.log('filename: ',currentVideo);
  }, [currentVideo]);
  
  //Temp function for development. To be removed.
  useEffect(() => {
    const urlCreateUser =
      "https://5000-vibhorjaisw-videoeditor-1846ju1x2au.ws-us71.gitpod.io/createnewuser";
    fetch(urlCreateUser, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((data) => {
      console.log(data);
    });
  });

  //To perform editing
  useEffect(() => {
    if (editType != "none") {
      
      console.log('performing: ', editType);
      
      const data  = {
        username,
        "command":editType,
        "input1":currentVideo,
        "output":`${currentVideo.replace('.mp4', '')}_output.mp4`
      }


    fetch('https://5000-vibhorjaisw-videoeditor-1846ju1x2au.ws-us71.gitpod.io/doTranscode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        let videoPlayer = document.getElementById('currentVideoPlayer');
        let videoUrl = `https://5000-vibhorjaisw-videoeditor-1846ju1x2au.ws-us71.gitpod.io/${username}/${currentVideo.replace('.mp4', '')}_output.mp4`
        videoPlayer.src = videoUrl;
      })

    // const video =   document.querySelector("video")
    // video.src = "http://localhost:5000/user1/output.mp4";
    // video.load();
    // video.play();

    //   console.log(data);





    }
  }, [editType]);

  const toolsDivMethods = { handleUploadVideo, handleEditType };
  const loginPageMethods = { changeCurrentPage, handleUsername, username };

  return (
    <>
      {!currentPage && (
        <LoginPage
          methods={loginPageMethods}
          handleCurrentPage={handleCurrentPage}
        />
      )}
      {currentPage && (
        <>
          <ToolsDiv methods={toolsDivMethods} />
          <AllVideosDiv />
          <CurrentVideoDiv />
          <TimelineDiv />
        </>
      )}
    </>
  );
}

export default App;
