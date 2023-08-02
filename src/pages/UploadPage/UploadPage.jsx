import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
    return (
        <div className="upload-page">

            <div className="upload-page__content">
                <h1 className="upload-page__heading">Upload Video</h1>
                <h5 className="upload-page__subheading">VIDEO THUMBNAIL</h5>

                <img className="upload-page__image" src={VideoThumbnail} alt="Video Thumbnail" />
            </div>
            <form className="upload-page__form">
                <div className="upload-page__form-container">
                    <div className="upload-page__form-input-container">
                        <div className="upload-page__form-input-wrapper">
                            <label htmlFor="videoTitle" className="upload-page__form-label">TITLE YOUR VIDEO</label>
                            <input type="text" className="upload-page__form-input" name="videoTitle" id="videoTitle" placeholder="Add a title to your video"></input>
                        </div>

                        <div className="upload-page__form-input-wrapper">
                            <label htmlFor="videoDescription" className="upload-page__form-label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-page__form-input" name="videoDescription" id="videoDescription" placeholder="Add a description to your video"></textarea>
                        </div>
                    </div>

                    <div className="upload-page__publish-wrapper">
                        <img className="upload-page__publish-image" src={PublishIcon} alt="publish icon" />
                        <span className="upload-page__publish-text">PUBLISH</span>
                    </div>
                </div>

            </form>

            <a className="upload-page__cancel" href="">CANCEL</a>

        </div>
    );
}

export default UploadPage;