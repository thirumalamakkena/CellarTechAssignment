import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.css";

const CityItem = (props) => {
  const { cityItem } = props;
  const { name, description, imageUrl, rating } = cityItem;

  return (
    <li className="guide-item-container">
      <img alt={name} src={imageUrl} className="city-img" />
      <p className="title">{name}</p>
      <p className="description">{description}</p>
      <div className="no-of-views-likes-container">
        <div className="no-of-likes-container">
          <FaStar color="gold" />
          <p className="no-count">{rating}</p>
        </div>
        <button type="button" className="review-link-btn">
          <Link to="/review" className="review-link">
            Reviews =>
          </Link>
        </button>
      </div>
    </li>
  );
};

export default CityItem;
