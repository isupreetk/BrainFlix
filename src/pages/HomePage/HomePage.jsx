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

  const api_URL = "https://project-2-api.herokuapp.com/videos";
  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";

  const formRef = useRef();

  const form = formRef.current;

  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({});
  const [commentId, setCommentId] = useState("");

  function handleAddCommentClick(event) {
    event.preventDefault();
    axios.post(`${api_URL}/${selectedVideoDetail.id}/comments/${api_key}`, {
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
    axios.get(`${api_URL}/${videoId}${api_key}`)
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
    axios.get(`${api_URL}${api_key}`)
      .then((response) => {
        setVideos(response.data);
        if (!id) {
          getSelectedVideo(response.data[0].id)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  useEffect(() => {
    getSelectedVideo(id)
  }, [id])

  let upNextVideoList = videos.filter((video) => {
    return (video.id !== selectedVideoDetail.id);
  })

  return (
    <div className="home-page">
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} />
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