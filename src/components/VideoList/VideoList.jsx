import { Link } from "react-router-dom";
import "./VideoList.scss";

function VideoList({upNextVideoList})
{
    
    return (
        <div className="next-video">
            <h5 className="next-video__heading">NEXT VIDEOS</h5>

            <ul className="next-video__wrapper">
                {
                upNextVideoList
                .map((nextVideo) => {
                    return (
                            <li className="next-video__item" key={nextVideo.id}>
                            <Link to={`/videos/${nextVideo.id}`}>
                            <div className="next-video__container" >
                                <div className="next-video__image-container">
                                    <img src={nextVideo.image} alt={nextVideo.title} className="next-video__image"/>
                                </div>
                                <div className="next-video__detail">
                                    <p className="next-video__title">{nextVideo.title}</p>
                                    <p className="next-video__channel">{nextVideo.channel}</p>
                                </div>
                            </div>
                            </Link>
                        </li>
                        
                )
            }
            )}
            </ul>
        </div>
    );
}

export default VideoList;