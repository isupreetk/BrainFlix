import "./HomePage.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {

  const api_URL = `${process.env.REACT_APP_API_SERVER}/videos`;

  const formRef = useRef();

  const form = formRef.current;

  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({});

  // eslint-disable-next-line
  const [commentId, setCommentId] = useState("");

  function formValidation() {
    let valid = true;
    if (!form.comment.value) {
      valid = false;
    }
    return valid;
  }

  function handleAddCommentClick(event) {
    event.preventDefault();
    
    let isValid = formValidation();

    if(isValid) {
    axios.post(`${api_URL}/${selectedVideoDetail.id}/comments/`, {
      name: "Mohan Muruge",
      comment: event.target.comment.value,
    })
      .then((response) => {
        getSelectedVideo(selectedVideoDetail.id);
      })
      .catch((error) => {
        console.log(error);
      })
    form.reset();
    }
    else {
      alert("Please enter your comment!");
    }
}


  function handleDeleteClick(commentId) {
    axios.delete(`${api_URL}/${selectedVideoDetail.id}/comments/${commentId}/`)
      .then((response) => {
        setCommentId(response.data);
        getSelectedVideo(selectedVideoDetail.id);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleLikeClick() {
    axios.put(`${api_URL}/${selectedVideoDetail.id}/likes/`)
    .then((response) => {
      getSelectedVideo(selectedVideoDetail.id);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function getSelectedVideo(videoId) {
    axios.get(`${api_URL}/${videoId}`)
      .then((response) => {
        response.data.comments.sort((a, b) => {
          return b.timestamp - a.timestamp
        });
        setSelectedVideoDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    axios.get(`${api_URL}`)
      .then((response) => {
        setVideos(response.data);
        if (!id) {
          getSelectedVideo(response.data[0].id)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      // eslint-disable-next-line
  }, [])


  useEffect(() => {
    if(id) {
    getSelectedVideo(id);
  }
  else if (videos.length > 0){
    getSelectedVideo(videos[0].id);
  }
  // eslint-disable-next-line
  }, [id])

  let upNextVideoList = videos.filter((video) => {
    return (video.id !== selectedVideoDetail.id);
  })

  return (
    <div className="home-page">
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} handleLikeClick={handleLikeClick} />
          <Form handleAddCommentClick={handleAddCommentClick} formRef={formRef} />
          <Comment selectedVideoDetail={selectedVideoDetail} handleDeleteClick={handleDeleteClick} />
        </div>
        <div className="sidebar sidebar--right">
          <VideoList upNextVideoList={upNextVideoList} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;