export function dynamicTimestamp(commentDate) {
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

  export function scrollToTop() {
    window.scrollTo({ top: 0, left: 0 });
  };