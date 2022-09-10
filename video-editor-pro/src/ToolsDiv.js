import toolsdiv from "./css/toolsdiv.module.css";
import { MdOutlineInvertColors } from "react-icons/md";
import { BiCut } from "react-icons/bi";
import {AiOutlineRotateRight, AiOutlineMergeCells} from 'react-icons/ai'

function ToolsDiv() {

  return (
    <div className={toolsdiv.area}>

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

    </div>
  );
}

export default ToolsDiv;
