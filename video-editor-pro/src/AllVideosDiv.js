import allvideosdiv from "./css/allvideosdiv.module.css";

function AllVideosDiv() {
  return (
    <div className={allvideosdiv.area}>
      <div style={{ height: "25px" }}></div> {/*To add padding */}
      <div className={allvideosdiv.videoThumbnail}></div>
      <div className={allvideosdiv.videoThumbnail}></div>
      <div className={allvideosdiv.videoThumbnail}></div>
    </div>
  );
}

export default AllVideosDiv;
