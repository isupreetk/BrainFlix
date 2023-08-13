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

    {/* <div className="hero-video__controls">
            <div id="video-controls" class="controls" data-state="hidden">
        <button id="playpause" type="button" data-state="play">
          <img src={PlayButton} alt="play icon"/>
          </button>
        <div class="progress">
          <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
          </progress>
        </div>
        <button id="mute" type="button" data-state="mute"><img src={VolumeUp} alt="volume icon" /></button>
        // <button id="volinc" type="button" data-state="volup">Vol+</button>
        // <button id="voldec" type="button" data-state="voldown">Vol-</button> 

        <button id="fs" type="button" data-state="go-fullscreen">
          <img src={FullScreen} alt="fullscreen icon" />
        </button>
      </div>
      </div> 
      */}

    </section> 
  );
}

export default HeroVideo;