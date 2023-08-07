import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
import { dynamicTimestamp } from "../../utils";

function Comment({ selectedVideoDetail, handleDeleteClick }) {

    const api_URL = "https://project-2-api.herokuapp.com/videos";
    const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";


    return (

        <div className="comments">

            {selectedVideoDetail.comments?.map((comment) => {
                return (

                    <div className="comments__container" key={comment.id}>
                        <Avatar src="" className="avatar__image avatar__image--comments" />

                        <div className="comments__content-div">
                            <div className="comments__detail">
                                <p className="comments__detail-content comments__detail-content--left">{comment.name}</p>
                                <p className="comments__detail-content comments__detail-content--right">{dynamicTimestamp(comment.timestamp)}</p>
                            </div>
                            <div className="comments__comment">
                                {comment.comment}
                            </div>
                            <div className="comments__delete">
                                <button className="comments__delete-button" onClick={() => { handleDeleteClick(comment.id) }} >DELETE</button>
                            </div>

                        </div>
                    </div>

                );

            })
            }
        </div>
    );
}

export default Comment;