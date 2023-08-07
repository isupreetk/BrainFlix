import "./Form.scss";
import Avatar from "../Avatar/Avatar";

import LoginImage from "../../assets/images/Mohan-muruge.jpg"
import CommentIcon from "../../assets/icons/add_comment.svg"

function Form({ handleAddCommentClick, formRef }) {

  return (
    <>
      <section className="form-section">
        <div className="form-section__container">

          <Avatar src={LoginImage} className="avatar__image avatar__image--form" />

          <div className="form-section__content">
            <h5 className="form-section__subheading">JOIN THE CONVERSATION</h5>
            <form className="form-section__form" ref={formRef} onSubmit={(event) => { handleAddCommentClick(event); }}>
              <textarea type="text" name="comment" className="form-section__input" id="comment" placeholder=" Add a new comment"></textarea>
              <button className="form-section__comment-wrapper">
                <img className="form-section__comment-icon" src={CommentIcon} alt="Comment Icon" />
                <span className="form-section__comment-text">COMMENT</span>
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;