import Avatar from "../Avatar/Avatar";
import "./Comment.scss";

function Comment({selectedVideoDetail, dynamicTimestamp}) {

    return (

        
        <div className="comments">

            {selectedVideoDetail.comments.map((comment) => {
                return (
                    
                        <div className="comments__container" key={comment.id}>

                            <Avatar src="" className="avatar__image avatar__image--comments"/>

                            <div className="comments__content-div">
                                <div className="comments__detail">
                                    <p className="comments__detail-content comments__detail-content--left">{comment.name}</p>
                                    <p className="comments__detail-content comments__detail-content--right">{dynamicTimestamp(comment.timestamp)}</p>
                                </div>
                                <div className="comments__comment">
                                    {comment.comment}
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