import "./Video.scss";
import ViewsIcon from "../../assets/icons/views.svg"
import LikeIcon from "../../assets/icons/likes.svg"

import videoDetailsJSON from "../../assets/data/video-details.json"


function Video() {

    // console.log(videoDetailsJSON);
    console.log(videoDetailsJSON[0]);

    return (
            <section className="video-section">
            <video className="video-section__player" src="" poster={videoDetailsJSON[0].image} controls></video>
                <div className="video-section__container">
                    <div className="video-section__heading">
                        {/* <h2>BMX Rampage: 2021 Highlights</h2> */}
                        <h2>{videoDetailsJSON[0].title}</h2>
                    </div>
                    <div className="video-section__about">
                        <div className="video-section__detail">
                            <h4 className="video-section__artist-date">By {videoDetailsJSON[0].channel}</h4>
                            <h4 className="video-section__artist-date">{videoDetailsJSON[0].timestamp}</h4>
                        </div>
                        <div className="video-section__views">
                            <img className="video-section__icons" src={ViewsIcon} alt="Views Icon" />{videoDetailsJSON[0].views}
                            <img className="video-section__icons" src={LikeIcon} alt="Like Icon" /> {videoDetailsJSON[0].likes}
                        </div>
                    </div>
                    <div className="video-section__description">
                    <p className="video-section__description-container">
                        {videoDetailsJSON[0].description}
                    </p>
                    </div>
                </div>
            </section>
    );
}

export default Video;