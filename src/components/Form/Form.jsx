import "./Form.scss";
// import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";

import LoginImage from "../../assets/images/Mohan-muruge.jpg"
import CommentIcon from "../../assets/icons/add_comment.svg"

function Form() {
    
    return (
        <>
        <section className="form-section">
        <h3 className="form-section__header">3 Comments</h3>
        <div className="form-section__container">
          {/* <div className="form-section__image">
            <img className="form-section__login-image" src={LoginImage} alt="Login profile" />
          </div> */}

          <Avatar src={LoginImage} className="avatar__image avatar__image--form"/>

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

      {/* <Comment videoDetailsJSON={props.videoDetailsJSON} /> */}
      </>
    );
}

export default Form;