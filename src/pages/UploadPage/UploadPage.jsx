import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";

import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

function UploadPage() {

    const api_URL = process.env.REACT_APP_API_SERVER;

    const [videos, setVideos] = useState([]);

    const uploadFormRef = useRef();

    const navigate = useNavigate();

    let valid = true;

    function uploadFormValidation() {
        if (!uploadFormRef.current.videoTitle.value || !uploadFormRef.current.videoDescription.value) {
            valid = false;
        }
        return valid;
    }

    const handlePublishClick = (event) => {
        event.preventDefault();

        let isValid = uploadFormValidation();

        if (isValid) {
            axios.post(`${api_URL}/videos`,
                {
                    videoTitle: uploadFormRef.current.videoTitle.value,
                    videoDescription: uploadFormRef.current.videoDescription.value,
                })

                .then((response) => {
                    setVideos([...videos, response.data]);
                    alert("Thank you for uploading your video");
                    navigate("/videos");

                }).catch((error) => {
                    console.log(error);
                });
            uploadFormRef.current.reset();
        }
        else {
            alert("Please add your video details");
        }
    }

    return (
        <div className="upload-page">

            <div className="upload-page__title">
                <h1 className="upload-page__heading">Upload Video</h1>
                <h5 className="upload-page__subheading">VIDEO THUMBNAIL</h5>
            </div>

            <div className="upload-page__video-details">

                <form className="upload-page__form" ref={uploadFormRef} onSubmit={handlePublishClick} >
                    <div className="upload-page__form-section">
                        
                    <img className="upload-page__image" src={VideoThumbnail} alt="Video Thumbnail" />

                    <div className="upload-page__form-container">
                        <div className="upload-page__form-input-container">
                            <div className="upload-page__form-input-wrapper">
                                <label htmlFor="videoTitle" className="upload-page__form-label">TITLE YOUR VIDEO</label>
                                <input type="text" className="upload-page__form-input" name="videoTitle" id="videoTitle" placeholder="Add a title to your video"></input>

                            </div>


                            <div className="upload-page__form-input-wrapper">
                                <label htmlFor="videoDescription" className="upload-page__form-label">ADD A VIDEO DESCRIPTION</label>
                                <textarea className="upload-page__form-input upload-page__form-input--textarea" name="videoDescription" id="videoDescription" placeholder="Add a description to your video"></textarea>
                            </div>
                        </div>
                    </div>

                    </div>

                    <div className="upload-page__links">
                        <button className="upload-page__publish-wrapper">
                            <img className="upload-page__publish-image" src={PublishIcon} alt="publish icon" />
                            <span className="upload-page__publish-text">PUBLISH</span>
                        </button>

                    <Link to="/videos" className="upload-page__cancel">CANCEL</Link>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default UploadPage;