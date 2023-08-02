import "./HomePage.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {

  const api_URL = "https://project-2-api.herokuapp.com/videos";
  const api_key = "?api_key=41a07f45-edd5-4710-950d-143b635e4bfc";
  
  const {id} = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({});
  
  useEffect(() => {
    axios.get(`${api_URL}${api_key}`)
    .then((response) => {
      setVideos(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  useEffect(() => {
    if(id) {
    axios.get(`${api_URL}/${id}${api_key}`)
    .then((response) => {
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
  },[id])

  function dynamicTimestamp(commentDate) {
    let currentTimestamp = new Date();
    let commentTimestamp = commentDate;
  
    let diffMilliSeconds = Math.abs(currentTimestamp - commentTimestamp);
    let diffSeconds = Math.floor(diffMilliSeconds / 1000);
    let diffMinutes = Math.floor(diffSeconds / 60);
    let diffHours = Math.floor(diffMinutes / 60);
    let diffDays = Math.floor(diffHours / 24);
    let diffMonths = Math.floor(diffDays / 30);
    let diffYears = Math.floor(diffMonths / 12);
  
    if (diffMinutes === 0) {
      let commentTimeMessage = "less than a minute ago";
      return commentTimeMessage;
    } else if (
      diffMinutes > 0 &&
      diffHours === 0 &&
      diffDays === 0 &&
      diffMonths === 0 &&
      diffYears === 0
    ) {
      if (diffMinutes === 1) {
        let commentTimeMessage = `${diffMinutes} minute ago`;
        return commentTimeMessage;
      } else {
        let commentTimeMessage = `${diffMinutes} minutes ago`;
        return commentTimeMessage;
      }
    } else if (
      diffHours > 0 &&
      diffDays === 0 &&
      diffMonths === 0 &&
      diffYears === 0
    ) {
      if (diffHours === 1) {
        let commentTimeMessage = `${diffHours} hour ago`;
        return commentTimeMessage;
      } else {
        let commentTimeMessage = `${diffHours} hours ago`;
        return commentTimeMessage;
      }
    } else if (diffDays > 0 && diffMonths === 0 && diffYears === 0) {
      if (diffDays === 1) {
        let commentTimeMessage = `${diffDays} day ago`;
        return commentTimeMessage;
      } else {
        let commentTimeMessage = `${diffDays} days ago`;
        return commentTimeMessage;
      }
    } else if (diffMonths > 0 && diffYears === 0) {
      if (diffMonths === 1) {
        let commentTimeMessage = `${diffMonths} month ago`;
        return commentTimeMessage;
      } else {
        let commentTimeMessage = `${diffMonths} months ago`;
        return commentTimeMessage;
      }
    } else if (diffYears > 0) {
      if (diffYears === 1) {
        let commentTimeMessage = `${diffYears} year ago`;
        return commentTimeMessage;
      } else {
        let commentTimeMessage = `${diffYears} years ago`;
        return commentTimeMessage;
      }
    }
  }  

  return (
    <div className="home-page">
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} dynamicTimestamp={dynamicTimestamp} />
          <Form />
          <Comment selectedVideoDetail={selectedVideoDetail} dynamicTimestamp={dynamicTimestamp} />
        </div>

        <div className="sidebar sidebar--right">
          <VideoList videos={videos} selectedVideoDetail={selectedVideoDetail}  />
        </div>
      </div>
    </div>
  );
}

export default HomePage;