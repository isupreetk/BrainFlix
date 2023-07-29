import "./VideoList.scss";

function VideoList(props) {

    return (
        <>
        <h5 className="next-video__heading">NEXT VIDEOS</h5>

        <ul>
            {
            props.videos
            .filter((video) => {
                return (video.id !== props.selectedVideoDetail.id);
            })
            .map((video) => {
                return (
                    <li className="next-video" onClick={() => {
                        props.handleVideoSelection(video.id)
                    }} key={video.id}>
                        <div className="next-video__container" >
                            <div className="next-video__image-container">
                                <img src={video.image} alt="" className="next-video__image"/>
                            </div>
                            <div className="next-video__detail">
                                <p className="next-video__title">{video.title}</p>
                                <p className="next-video__channel">{video.channel}</p>
                            </div>
                        </div>
                    </li>
            )
        }
        )}
        </ul>
        </>
    );
}

export default VideoList;