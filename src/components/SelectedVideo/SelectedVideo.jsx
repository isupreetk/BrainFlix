import "./SelectedVideo.scss";
import { dynamicTimestamp } from "../../utils";
import ViewsIcon from "../../assets/icons/views.svg"
import LikeIcon from "../../assets/icons/likes.svg"

function Video({ selectedVideoDetail }) {

    return (

        <section className="video-section">
            <div className="video-section__container">
                <div className="video-section__heading-container">
                    <h2 className="video-section__heading">{selectedVideoDetail.title}</h2>
                </div>
                <div className="video-section__about">
                    <div className="video-section__detail">
                        <h4 className="video-section__artist-date video-section__artist-date--bold">By {selectedVideoDetail.channel}</h4>
                        <h4 className="video-section__artist-date">{dynamicTimestamp(selectedVideoDetail.timestamp)}</h4>
                    </div>
                    <div className="video-section__views">
                        <div className="video-section__views-wrapper">
                            <img className="video-section__icons" src={ViewsIcon} alt="Views Icon" />{selectedVideoDetail.views}
                        </div>
                        <div className="video-section__views-wrapper">
                            <img className="video-section__icons" src={LikeIcon} alt="Like Icon" /> {selectedVideoDetail.likes}
                        </div>
                    </div>
                </div>
                <div className="video-section__description">
                    <p className="video-section__description-container">
                        {selectedVideoDetail.description}
                    </p>
                </div>
                <h3 className="video-section__comments-count">
                    {selectedVideoDetail.comments?.length} Comments
                </h3>
            </div>
        </section>
    );
}

export default Video;