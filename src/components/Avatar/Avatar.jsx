import "./Avatar.scss";

function Avatar({ className, src }) {
    return (
        <div className="avatar__wrapper">
            <img className={className} src={src} alt="avatar image" />
        </div>
    );
}

export default Avatar;