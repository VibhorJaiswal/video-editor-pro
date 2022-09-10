import toolsdiv from "./css/toolsdiv.module.css";
import { MdOutlineInvertColors, MdDriveFolderUpload } from "react-icons/md";
import { BiCut } from "react-icons/bi";
import {AiOutlineRotateRight, AiOutlineMergeCells} from 'react-icons/ai'

function ToolsDiv() {

  return (
    <div className={toolsdiv.area}>

      <div style={{height: '30px'}}></div> {/*To add padding */}

      <button className={toolsdiv.toolsButton}>
        <MdOutlineInvertColors size={30} color="white" />
        <p>Grey Scale</p>
      </button>

      <button className={toolsdiv.toolsButton}>
        <BiCut size={30} color="white" />
        <p>Cut</p>
      </button>

      <button className={toolsdiv.toolsButton}>
        <AiOutlineRotateRight size={30} color="white" />
        <p>Rotate</p>
      </button>


      <button className={toolsdiv.toolsButton}>
        <AiOutlineMergeCells size={30} color="white" />
        <p>Merge</p>
      </button>

      <button className={toolsdiv.toolsButton}>
        <MdDriveFolderUpload size={30} color="white" />
        <p>Upload Video</p>
      </button>

    </div>
  );
}

export default ToolsDiv;
