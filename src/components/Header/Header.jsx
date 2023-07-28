import "./Header.scss";
import Avatar from "../Avatar/Avatar";

import BrainFlixLogo from "../../assets/logo/BrainFlix-logo.svg"
// import SearchIcon from "./assets/icons/search.svg"
import UploadBtn from "../../assets/icons/upload.svg"
import LoginImage from "../../assets/images/Mohan-muruge.jpg"

function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__content header__content--left">
                        <div className="header__logo-wrapper">
                            <img className="header__logo " src={BrainFlixLogo} />
                        </div>
                    </div>

                    <div className="header__content header__content--right">
                        <div className="header__content header__content--alternate">
                            <div className="header__search-wrapper">
                                {/* <input type="image" name="searchIcon" id="searchIcon" src={SearchIcon}/> */}
                                <input type="text" name="search" id="search" className="header__search-bar" placeholder="Search" />
                            </div>
                            <Avatar src={LoginImage} className="avatar__image avatar__image--alternate-header" />

                        </div>
                        <div className="header__upload-wrapper">
                            <img className="header__upload-image" src={UploadBtn} />
                            <span className="header__upload-text">UPLOAD</span>
                        </div>

                        {/* <div className="header__login-wrapper">
                            <img className="header__login-image" src={LoginImage} />
                        </div> */}

                        <Avatar src={LoginImage} className="avatar__image avatar__image--header" />

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;