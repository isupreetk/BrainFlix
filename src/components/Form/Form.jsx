import "./Form.scss";
// import Comment from "../Comment/Comment";

import LoginImage from "../../assets/images/Mohan-muruge.jpg"
import CommentIcon from "../../assets/icons/add_comment.svg"

// import videoDetailsJSON from "../../assets/data/video-details.json"

function Form() {
// console.log("form props: ",props);
    // console.log(VideoDetailsJSON);
    // console.log(VideoDetailsJSON[0].comments);

    // const videoDetailsComments = videoDetailsJSON[0].comments;
    // console.log('videoDetailsComments', videoDetailsComments)
    
    return (
        <>
        <section className="form-section">
        <h3 className="form-section__header">3 Comments</h3>
        <div className="form-section__container">
          <div className="form-section__image">
            <img className="form-section__login-image" src={LoginImage} alt="Login profile" />
          </div>
          <div className="form-section__content">
            <h5 className="form-section__subheading">JOIN THE CONVERSATION</h5>
            <form className="form-section__form">
              <input type="text" name="comment" id="comment" placeholder="Add a new comment"></input>
              <div className="form-section__comment-wrapper">
                <img className="form-section__comment-icon" src={CommentIcon} alt="Comment Icon"/>
                <span className="form-section__comment-text">COMMENT</span>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* <Comment videoDetailsComments={videoDetailsComments} /> */}
      {/* <Comment videoDetailsJSON={props.videoDetailsJSON} /> */}
      </>
    );
}

export default Form;