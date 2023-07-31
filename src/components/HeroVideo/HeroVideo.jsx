import "./HeroVideo.scss";

function HeroVideo({selectedVideoDetail}) {
    return (
            <section className="hero-video">
                <video className="hero-video__player" src={selectedVideoDetail.video} poster={selectedVideoDetail.image} controls></video>
            </section>
    );
}

export default HeroVideo;