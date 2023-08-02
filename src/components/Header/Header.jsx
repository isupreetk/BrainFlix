import "./Header.scss";
import Avatar from "../Avatar/Avatar";

import BrainFlixLogo from "../../assets/logo/BrainFlix-logo.svg"
import UploadBtn from "../../assets/icons/upload.svg"
import LoginImage from "../../assets/images/Mohan-muruge.jpg"

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__content header__content--left">
                        <div className="header__logo-wrapper">
                            <Link to="/"><img className="header__logo " src={BrainFlixLogo} alt="logo" /></Link>
                        </div>
                    </div>

                    <div className="header__content header__content--right">
                        <div className="header__content header__content--alternate">
                            <div className="header__search-wrapper">
                                <input type="text" name="search" id="search" className="header__search-bar" placeholder="Search" />
                            </div>
                            <Avatar src={LoginImage} className="avatar__image avatar__image--alternate-header" />

                        </div>
                        <Link to="/upload">
                            <div className="header__upload-wrapper">
                            
                            <img className="header__upload-image" src={UploadBtn} alt="upload icon" />
                            <span className="header__upload-text">UPLOAD</span>
                            
                        </div>
                        </Link>

                        <Avatar src={LoginImage} className="avatar__image avatar__image--header" />

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;