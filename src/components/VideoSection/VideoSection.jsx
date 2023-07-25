import "./VideoSection.scss";
import ViewsIcon from "../../assets/icons/views.svg"
import LikeIcon from "../../assets/icons/likes.svg"


function VideoSection() {
    return (
        <>
            <section className="video-section">
                <video className="video-section__player" src="" poster="https://i.imgur.com/l2Xfgpl.jpg" controls></video>
                <div className="video-section__container">
                    <div className="video-section__heading">
                        <h2>BMX Rampage: 2021 Highlights</h2>
                    </div>
                    <div className="video-section__about">
                        <div className="video-section__detail">
                            <h4 className="video-section__artist-date">By Red Crow</h4>
                            <h4 className="video-section__artist-date">07/11/2021</h4>
                        </div>
                        <div className="video-section__views">
                            <img className="video-section__icons" src={ViewsIcon} alt="Views Icon" />1,001,023
                            <img className="video-section__icons" src={LikeIcon} alt="Like Icon" /> 110,985
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoSection;