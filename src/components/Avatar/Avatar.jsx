import "./Avatar.scss";

function Avatar(props) {
    return (
        <div className="avatar__wrapper">
             <img className={props.className} src={props.src} />
        </div>
    );
}

export default Avatar;