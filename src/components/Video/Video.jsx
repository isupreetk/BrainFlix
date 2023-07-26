import "./Video.scss";
import ViewsIcon from "../../assets/icons/views.svg"
import LikeIcon from "../../assets/icons/likes.svg"


function Video() {
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
                    <div className="video-section__description">
                    <p className="video-section__description-container">
                        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
                    </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Video;