import "./HeroVideo.scss";

function HeroVideo(props) {
    return (
        <section className="hero-video">
        <video className="hero-video__player" src={props.selectedVideoDetail.video} poster={props.selectedVideoDetail.image} controls></video>
        </section>
    );
}

export default HeroVideo;