import "./App.scss";
import BrainFlixLogo from "./assets/logo/BrainFlix-logo.svg"
import ViewsIcon from "./assets/icons/views.svg"
import LikeIcon from "./assets/icons/likes.svg"
// import SearchIcon from "./assets/icons/search.svg"
import UploadBtn from "./assets/icons/upload.svg"
import LoginImage from "./assets/images/Mohan-muruge.jpg"

function App() {
  return (
  <div className="App">
    <header className="header">
      <div className="header__container">
        <div className="header__content header__content--left">
        <div className="header__logo-wrapper">
        <img className="header__logo " src={BrainFlixLogo} />
        </div>
        </div>

        <div className="header__content header__content--right">
        <div className="header__search-wrapper">
          {/* <input type="image" name="searchIcon" id="searchIcon" src={SearchIcon}/> */}
          <input type="text" name="search" id="search" className="header__search-bar" placeholder="Search" />
        </div>
          <div className="header__upload-wrapper">
            <img className="header__upload-image" src={UploadBtn} />
            <span className="header__upload-text">UPLOAD</span>
          </div>

        <div className="header__login-wrapper">
          <img className="header__login-image" src={LoginImage} />
        </div>
        
        </div>
      </div>
    </header>

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
          <img className="video-section__icons" src={LikeIcon} alt="Like Icon"/> 110,985
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
