import "./VideoList.scss";

function VideoList({videos, selectedVideoDetail, handleVideoSelection}) {

    return (
        <div className="next-video">
            <h5 className="next-video__heading">NEXT VIDEOS</h5>

            <ul className="next-video__wrapper">
                {
                videos
                .filter((video) => {
                    return (video.id !== selectedVideoDetail.id);
                })
                .map((video) => {
                    return (
                        <li className="next-video__item" onClick={() => {
                            handleVideoSelection(video.id)
                        }} key={video.id}>
                            <div className="next-video__container" >
                                <div className="next-video__image-container">
                                    <img src={video.image} alt={video.title} className="next-video__image"/>
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
        </div>
    );
}

export default VideoList;