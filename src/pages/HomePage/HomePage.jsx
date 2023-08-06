import "./HomePage.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";

// import { dynamicTimestamp } from "../../utils";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {

  const api_URL = "https://project-2-api.herokuapp.com/videos";
  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";

  // const formRef = useRef();
  // const form = formRef.current;

  // console.log(form.comment.value);

  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({});
  const [commentId, setCommentId] = useState("");

  function handleAddCommentClick(event) {
    axios.post(`${api_URL}/${selectedVideoDetail.id}/comments/${api_key}`,{
      name: "Supreet",
      comment: "Added a new comment"
    })
    .then((response) => {
      console.log(response.data);
      getSelectedVideo();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleDeleteClick(commentId) {
        axios.delete(`${api_URL}/${selectedVideoDetail.id}/comments/${commentId}/${api_key}`)
        .then((response) => {
          // console.log("comment deleted", response);
          setCommentId(response.data);
          getSelectedVideo();
          // selectedVideoDetail.comment?.remove()
        })
        .catch((error) => {
          console.log(error);
        })
}

  function getSelectedVideo() {
    if (id) {
      axios.get(`${api_URL}/${id}${api_key}`)
        .then((response) => {
          // console.log("selected video", response);
          setSelectedVideoDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      axios.get(`${api_URL}/84e96018-4022-434e-80bf-000ce4cd12b8${api_key}`)
        .then((response) => {
          setSelectedVideoDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  useEffect(() => {
    axios.get(`${api_URL}${api_key}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  
  useEffect(() => {
      getSelectedVideo()
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