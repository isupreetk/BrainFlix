import "./VideoList.scss";

function VideoList(props) {

    // console.log("Next video props:" ,props.videoDetails);
    return (
        <>
        <h1>NEXT VIDEO</h1>
        <ul>
            {
            props.videoDetails
            .filter((video) => {
                return (video.id !== props.selectedVideoDetail.id);
            })
            .map((video) => {
                return (
                    <div className="next-video" key={video.id}>
                        <div className="next-video__image-container">
                            <img src={video.image} alt="" className="next-video__image"/>
                        </div>
                        <div className="next-video__detail">
                            <p className="next-video__title">{video.title}</p>
                            <p className="next-video__channel">{video.channel}</p>
                        </div>
            </div>
            )
        }
        )}
        </ul>
        </>
    );
}

export default VideoList;