import "./SelectedVideo.scss";
import ViewsIcon from "../../assets/icons/views.svg"
import LikeIcon from "../../assets/icons/likes.svg"

function Video(props) {

    return (
       
            <section className="video-section">
                <div className="video-section__container">
                    <div className="video-section__heading">
                        <h2>{props.selectedVideoDetail.title}</h2>
                    </div>
                    <div className="video-section__about">
                        <div className="video-section__detail">
                            <h4 className="video-section__artist-date">By {props.selectedVideoDetail.channel}</h4>
                            <h4 className="video-section__artist-date">{props.formatDateDDMMYYYY(props.selectedVideoDetail.timestamp)}</h4>
                        </div>
                        <div className="video-section__views">
                            <img className="video-section__icons" src={ViewsIcon} alt="Views Icon" />{props.selectedVideoDetail.views}
                            <img className="video-section__icons" src={LikeIcon} alt="Like Icon" /> {props.selectedVideoDetail.likes}
                        </div>
                    </div>
                    <div className="video-section__description">
                    <p className="video-section__description-container">
                        {props.selectedVideoDetail.description}
                    </p>
                    </div>
                </div> 
            </section>
    );
}

export default Video;