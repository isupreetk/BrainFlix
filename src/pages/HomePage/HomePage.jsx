import "./HomePage.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// import { dynamicTimestamp } from "../../utils";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {

  const api_URL = "https://project-2-api.herokuapp.com/videos";
  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";

  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({});
  const [commentId, setCommentId] = useState("");

  function handleAddCommentClick(event) {
    event.preventDefault();
    axios.post(`${api_URL}/${selectedVideoDetail.id}/comments/${api_key}`,{
      name: "Mohan Muruge",
      comment: event.target.comment.value,
    })
    .then((response) => {
      getSelectedVideo(selectedVideoDetail.id);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleDeleteClick(commentId) {
        axios.delete(`${api_URL}/${selectedVideoDetail.id}/comments/${commentId}/${api_key}`)
        .then((response) => {
          setCommentId(response.data);
          getSelectedVideo(selectedVideoDetail.id);
        })
        .catch((error) => {
          console.log(error);
        })
}

  function getSelectedVideo(videoId) {

    // agar id mil rhi hai url selectedVideoDetail, toh search on basis of that id
    // nhi mil rhi hai toh search default 1st element
    // if 1st element is not Present,wait 
// console.log("videos", videos);

    // if(videos.length > 0 || id) {
      // let videoId = id ? id : videos[0].id;
      console.log(videoId);
      axios.get(`${api_URL}/${videoId}${api_key}`)
        .then((response) => {
          response.data.comments.sort((a,b) => {
            return b.timestamp - a.timestamp
          });
          setSelectedVideoDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
  // } else{
    // return;
  // }
       

    // if (id) { let id = id;
    // }
    // else {
    //   id = "84e96018-4022-434e-80bf-000ce4cd12b8";
    //   // videos[0].id
    // }
    
    // if (id) {
      
    // else {
    //   axios.get(`${api_URL}/84e96018-4022-434e-80bf-000ce4cd12b8${api_key}`)
    //     .then((response) => {
    //       response.data.comments.sort((a,b) => {
    //         return b.timestamp - a.timestamp
    //       });
         
  //         setSelectedVideoDetail(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // }
  }

  useEffect(() => {
    axios.get(`${api_URL}${api_key}`)
      .then((response) => {
        // console.log(response.data);

        setVideos(response.data);
        if(!id) {
        getSelectedVideo(response.data[0].id)
      }
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  
  useEffect(() => {
      getSelectedVideo(id)
  }, [id])

  // useEffect(() => {
  //   handleAddCommentClick()
  // },[selectedVideoDetail.comments])

  // useEffect (() => {handleDeleteClick(selectedVideoDetail.comments?.id)},[selectedVideoDetail.comments]);

  let upNextVideoList = videos.filter((video) => {
    return (video.id !== selectedVideoDetail.id);
  })
  
  return (
    <div className="home-page">
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} />
          <Form handleAddCommentClick={handleAddCommentClick}/>
          {/* formRef={formRef} */}
          <Comment selectedVideoDetail={selectedVideoDetail} handleDeleteClick={handleDeleteClick}/>
        </div>
        <div className="sidebar sidebar--right">
          {/* <VideoList videos={videos} selectedVideoDetail={selectedVideoDetail} /> */}
          <VideoList upNextVideoList={upNextVideoList} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;