import "./App.scss";
import LoginImage from "./assets/images/Mohan-muruge.jpg"
import CommentIcon from "./assets/icons/add_comment.svg"

import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />

      <section className="comments-section">
        <h3 className="comments-section__header">3 Comments</h3>

        {/* <img /> */}
        <div className="comments-section__container">
          <div className="comments-section__image">
            <img className="comments-section__login-image" src={LoginImage} alt="Login profile" />
            {/* <img className="comments-section__image" src={LoginImage} alt="Login profile" /> */}
          </div>
          <div className="comments-section__content">
            <h5 className="comments-section__subheading">JOIN THE CONVERSATION</h5>
            <form className="comments-section__form">
              <input type="text" name="comment" id="comment" placeholder="Add a new comment"></input>
              {/* <button>COMMENT</button> */}
              <div className="comments-section__comment-wrapper">
                <img className="comments-section__comment-icon" src={CommentIcon} />
                <span className="comments-section__comment-text">COMMENT</span>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
