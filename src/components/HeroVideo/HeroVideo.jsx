import "./HeroVideo.scss";
import PlayButton from "../../assets/icons/play.svg";
import ScrubImage from "../../assets/icons/scrub.svg";
import FullScreen from "../../assets/icons/fullscreen.svg";
import VolumeUp from "../../assets/icons/volume_up.svg";

function HeroVideo({ selectedVideoDetail }) {

  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";

  return (
    <section className="hero-video">
      <video className="hero-video__player" src={`${selectedVideoDetail.video}${api_key}`} poster={selectedVideoDetail.image} controls ></video>
    </section> 
  );
}

export default HeroVideo;