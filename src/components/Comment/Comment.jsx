import Avatar from "../Avatar/Avatar";
import "./Comment.scss";

function Comment(props) {

    return (

        
        <div className="comments">

            {props.selectedVideoDetail.comments.map((comment) => {
                return (
                    
                        <div className="comments__container" key={comment.id}>
                            {/* <div className="comments__image-div">
                                <img className="comments__image" src="" alt="" />
                            </div> */}

                            <Avatar src="" className="avatar__image avatar__image--comments"/>

                            <div className="comments__content-div">
                                <div className="comments__detail">
                                    <p className="comments__detail-content comments__detail-content--left">{comment.name}</p>
                                    <p className="comments__detail-content comments__detail-content--right">{comment.timestamp}</p>
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