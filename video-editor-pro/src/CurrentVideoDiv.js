import currentvideodiv from './css/currentvideodiv.module.css'

function CurrentVideoDiv()
{
    return (
        <div className={currentvideodiv.area}>


            <video className={currentvideodiv.videoStyle}></video>

        </div>
    )
}

export default CurrentVideoDiv