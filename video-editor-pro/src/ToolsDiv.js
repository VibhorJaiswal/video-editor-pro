import toolsdiv from "./css/toolsdiv.module.css";
import { MdOutlineInvertColors, MdDriveFolderUpload } from "react-icons/md";
import { BiCut } from "react-icons/bi";
import {GiSave} from "react-icons/gi"
import { AiOutlineRotateRight, AiOutlineMergeCells } from "react-icons/ai";

function ToolsDiv(props) {

  const {handleUploadVideo, handleEditType, handleSave} = props.methods;


  return (
    <div className={toolsdiv.area}>
      <div style={{ height: "30px" }}></div> {/*To add padding */}
      <button className={toolsdiv.toolsButton} onClick={() => {handleEditType('grayscale')}}>
        <MdOutlineInvertColors size={30} color="white" />
        <p>Grey Scale</p>
      </button>


      <button className={toolsdiv.toolsButton} onClick={() => {handleEditType('trim')}}>
        <BiCut size={30} color="white" />
        <p>Cut</p>
      </button>

      
      <button className={toolsdiv.toolsButton} onClick={() => {handleEditType('rotate')}}>
        <AiOutlineRotateRight size={30} color="white" />
        <p>Rotate</p>
      </button>


      <button className={toolsdiv.toolsButton} onClick={() => {handleEditType('merge')}}>
        <AiOutlineMergeCells size={30} color="white" />
        <p>Merge</p>
      </button>


      {/* upload button */}
      <button className={toolsdiv.toolsButton} onClick={handleSave}>
        <GiSave size={30} color="white" />
        <p>Save Video</p>
      </button>

      <div  className={toolsdiv.toolsButton}>
      <label for="file-upload">
        <MdDriveFolderUpload size={30} color="white" />
        <p>Upload Video</p>
        <input id="file-upload" style={{display: "none"}}  type="file" accept="video/*" onChange={handleUploadVideo}/>
      </label>      
      </div>
    </div>
  );
}

export default ToolsDiv;
