import currentvideodiv from './css/currentvideodiv.module.css'

function CurrentVideoDiv()
{
    return (
        <div className={currentvideodiv.area}>
            <video className={currentvideodiv.videoStyle} type="video/mp4" id='currentVideoPlayer' controls></video>
        </div>
    )
}

export default CurrentVideoDiv