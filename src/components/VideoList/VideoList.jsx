import { Link } from "react-router-dom";
import "./VideoList.scss";
import { scrollToTop } from "../../utils";

function VideoList({ upNextVideoList }) {
    return (
        <div className="next-video">
            <h5 className="next-video__heading">NEXT VIDEOS</h5>

            <ul className="next-video__wrapper">
                {
                    upNextVideoList
                        .map((nextVideo) => {
                            return (
                                <li className="next-video__item" key={nextVideo.id}>
                                    <Link className="next-video__item-link" to={`/videos/${nextVideo.id}`} onClick={scrollToTop}>
                                        <div className="next-video__container" >
                                            <div className="next-video__image-container">
                                                <img src={nextVideo.image} alt={nextVideo.title} className="next-video__image" />
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