import "./HeroVideo.scss";

function HeroVideo({selectedVideoDetail}) {

  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";
//   const randomNum = Math.random();

    return (
            <section className="hero-video">
                <video className="hero-video__player" src={`${selectedVideoDetail.video}${api_key}`} poster={selectedVideoDetail.image} controls></video>
                {/* ${api_key + randomNum} */}
            </section>
    );
}

export default HeroVideo;