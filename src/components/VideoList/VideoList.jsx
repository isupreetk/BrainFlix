import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./VideoList.scss";

function VideoList({videos, selectedVideoDetail})
{
    const {id} = useParams();
    
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
                            <li className="next-video__item" key={video.id}>
                            <Link to={`/${video.id}`}>
                            <div className="next-video__container" >
                                <div className="next-video__image-container">
                                    <img src={video.image} alt={video.title} className="next-video__image"/>
                                </div>
                                <div className="next-video__detail">
                                    <p className="next-video__title">{video.title}</p>
                                    <p className="next-video__channel">{video.channel}</p>
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