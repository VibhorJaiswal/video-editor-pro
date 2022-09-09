import toolsdiv from './css/toolsdiv.module.css'
import {MdOutlineInvertColors} from 'react-icons/md'
import {BiCut} from 'react-icons/bi'

function ToolsDiv()
{
    return(
        <div className={toolsdiv.area}>
            <MdOutlineInvertColors size={30} color="white"/>
            <p>Grey Scale</p>

            <BiCut size={30} color="white" />
            <p>Cut</p>
        </div>
    )
}

export default ToolsDiv