import "./index.css";
import { formatDistanceToNow } from "date-fns";

const ReviewItem = (props) => {
  const { reviews, likeStatus, onDeleteReview } = props;
  const { id, name, review, isLiked, bgColor, destination } = reviews;

  const onLiked = () => {
    likeStatus(id);
  };

  const onDelete = () => {
    onDeleteReview(id);
  };

  const likeIconUrl = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

  const likeClass = isLiked ? "like liked" : "like";

  return (
    <li className="review-item-container">
      <p className="name">
        <span className={`${"profile-dp"} ${bgColor}`}>
          {name[0].toUpperCase()}
        </span>
        {name}
        <span className="time">{formatDistanceToNow(new Date())}</span>
      </p>
      <p className="destination-title">{destination}</p>
      <p className="review-description">{review}</p>
      <div className="icons-container">
        <div className="like-container">
          <button className="like-button" type="button" onClick={onLiked}>
            <img src={likeIconUrl} className="like-icon" alt="like" />
          </button>

          <p className={likeClass}>Like</p>
        </div>
        <button
          type="button"
          className="like-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  );
};

export default ReviewItem;
