import { FaRegHeart } from "react-icons/fa";
import { PiEyeLight } from "react-icons/pi";

import "./index.css";

const GuideItem = (props) => {
  const { guideItem } = props;
  const { title, guideInfo, imageUrl } = guideItem;
  const { likes, views } = guideInfo;

  return (
    <li className="guide-item-container">
      <img alt={title} src={imageUrl} className="city-img" />
      <p className="title">{title}</p>
      <p className="description">
        These are the most beautiful cities in this itineraries.we can visit
        different cities.
      </p>
      <div className="no-of-views-likes-container">
        <div className="no-of-likes-container">
          <FaRegHeart />
          <p className="no-count">{likes}</p>
        </div>
        <div className="no-of-likes-container">
          <PiEyeLight />
          <p className="no-count">{views}</p>
        </div>
      </div>
    </li>
  );
};

export default GuideItem;
