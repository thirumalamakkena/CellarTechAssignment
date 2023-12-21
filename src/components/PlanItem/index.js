import "./index.css";

const PlanItem = (props) => {
  const { reviews, likeStatus, onDeleteReview, count } = props;
  const { id, destination, isLiked, bgColor } = reviews;

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
        <span className={`${"profile-dp"} ${bgColor}`}>{count}</span>
        {destination}
      </p>
      <p className="destination-title">{destination}</p>
      <p className="review-description">
        The 13th-century Notre Dame Cathedral is famous for its spire,
        gargoyles, and intricate Gothic architectural details. The cathedral was
        almost destroyed in a 2019 fire but some of the buildings{" "}
      </p>
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

export default PlanItem;
