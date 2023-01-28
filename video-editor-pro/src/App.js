import ToolsDiv from "./ToolsDiv.js";
import AllVideosDiv from "./AllVideosDiv.js";
import CurrentVideoDiv from "./CurrentVideoDiv.js";
import TimelineDiv from "./TimelineDiv.js";
import LoginPage from "./LoginPage.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const universalUrl =
    "https://5000-vibhorjaisw-videoeditor-0y2zqq7rkft.ws-us84.gitpod.io";

  const [currentPage, changeCurrentPage] = useState(true); //false for login page
  const [uploadedVideo, changeUploadedVideo] = useState({});
  const [username, changeusername] = useState("baman");
  const [editType, changeEditType] = useState("none");
  const [currentVideo, changeCurrentVideo] = useState("");
  const [editedVideoName, changeEditedVideo] = useState("");

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
    console.log(e);
    changeEditType(e);
  };

  const handleEditedVideo = (e) => {
    changeEditedVideo(e);
  };

  const handleSave = () => {
    console.log("saving to s3");
    const url = `${universalUrl}/saveToS3`;
    const data = {
      username,
      filename: editedVideoName,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
    });
  };

  //To upload video to server.
  useEffect(() => {
    if (uploadedVideo === {}) return;

    const url = `${universalUrl}/upload`;

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
        changeEditedVideo(uploadedVideo.name);
      });
  }, [uploadedVideo]);

  useEffect(() => {
    console.log("filename: ", currentVideo);
  }, [currentVideo]);

  //Temp function for development. To be removed.
  useEffect(() => {
    const urlCreateUser = `${universalUrl}/createnewuser`;
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
    if (editType !== "none") {
      console.log("performing: ", editType);

      const data = {
        username,
        command: editType,
        input1: currentVideo,
        output: `${currentVideo.replace(".mp4", "")}_output.mp4`,
      };

      fetch(`${universalUrl}/doTranscode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        let videoPlayer = document.getElementById("currentVideoPlayer");
        let videoUrl = `${universalUrl}/${username}/${currentVideo.replace(
          ".mp4",
          ""
        )}_output.mp4`;
        let editedVideoNameLocal = `${currentVideo.replace(
          ".mp4",
          ""
        )}_output.mp4`;
        videoPlayer.src = videoUrl;
        handleEditedVideo(editedVideoNameLocal);
      });
    }
  }, [editType]);

  const toolsDivMethods = { handleUploadVideo, handleEditType, handleSave };
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
