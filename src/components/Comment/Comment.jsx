import "./Comment.scss";

function Comment(props) {

    // let commentsListObj = props;
    // console.log(props.videoDetailsComments);
    // console.log(commentsListObj[0]);

    //   const comment = {
    //     "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
    //     "name": "Theodore Duncan",
    //     "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
    //     "likes": 0,
    //     "timestamp": 1626011132000
    //   }
    console.log(props.videoDetailsComments)

    return (

        <div className="comments">

            {props.videoDetailsComments?.map((comment, index) => {
                console.log("Comments object is: ", comment);
                console.log("Comment Name is: ", comment.name);
                console.log("Comment Date is: ", comment.timestamp);
                console.log("Comment is: ", comment.comment);
                // key={comment.id};
                return (
                    
                        <div className="comments__container" key={comment.id}>
                        {/* <div key={index}> */}
                            <div className="comments__image-div">
                                <img className="comments__image" src="" alt="" />
                            </div>
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