import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
import { dynamicTimestamp } from "../../utils";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";


function Comment({selectedVideoDetail, handleDeleteClick}) {
    
    const api_URL = "https://project-2-api.herokuapp.com/videos";
    const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";
    

    return (

        <div className="comments">

            {selectedVideoDetail.comments?.map((comment) => {
                return (
                    
                        <div className="comments__container" key={comment.id}>
                            {/* <Link to={`/videos/${selectedVideoDetail.id}/comments/${comment.id}`}> */}
                            <Avatar src="" className="avatar__image avatar__image--comments"/>

                            <div className="comments__content-div">
                                <div className="comments__detail">
                                    <p className="comments__detail-content comments__detail-content--left">{comment.name}</p>
                                    <p className="comments__detail-content comments__detail-content--right">{dynamicTimestamp(comment.timestamp)}</p>
                                </div>
                                <div className="comments__comment">
                                    {comment.comment}
                                </div>
                                <button className="comments__delete-button" onClick={() => {handleDeleteClick(comment.id)}} >DELETE</button>
                                
                                
                            </div>

                            {/* </Link> */}
                        </div>
                    
                );

            })
            }
        </div>
    );
}

export default Comment;