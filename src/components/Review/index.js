import { Component } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import ReviewItem from "../ReviewItem";
import Header from "../Header";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

// Write your code here

class Review extends Component {
  state = {
    count: 0,
    name: "",
    review: "",
    destination: "",
    reviewsList: [],
  };

  onChangeName = (event) => this.setState({ name: event.target.value });

  onChangeReview = (event) => this.setState({ review: event.target.value });

  onChangeDestination = (event) =>
    this.setState({ destination: event.target.value });

  addReview = (event) => {
    event.preventDefault();
    const { count, name, review, destination } = this.state;

    if (name === "" && review === "") {
      return;
    }

    const newItem = {
      id: uuidv4(),
      name,
      review,
      destination,
      isLiked: false,
      bgColor: initialContainerBackgroundClassNames[count % 7],
    };

    this.setState((prevState) => ({
      reviewsList: [...prevState.reviewsList, newItem],
      count: prevState.count + 1,
      name: "",
      review: "",
      destination: "",
    }));
  };

  likeStatus = (id) => {
    this.setState((prevState) => ({
      reviewsList: prevState.reviewsList.map((eachReview) => {
        if (id === eachReview.id) {
          return { ...eachReview, isLiked: !eachReview.isLiked };
        }
        return eachReview;
      }),
    }));
  };

  onDeleteReview = (id) => {
    this.setState((prevState) => ({
      reviewsList: prevState.reviewsList.filter(
        (eachReview) => id !== eachReview.id
      ),
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count, name, review, reviewsList, destination } = this.state;

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="reviews-container">
            <h1 className="reviews-title">Reviews</h1>
            <div className="input-container">
              <form onSubmit={this.addReview}>
                <p className="heading">
                  Write your review on particular destination
                </p>
                <input
                  className="name-input"
                  placeholder="Username"
                  value={name}
                  onChange={this.onChangeName}
                />
                <br />
                <input
                  className="name-input"
                  placeholder="Destination"
                  value={destination}
                  onChange={this.onChangeDestination}
                />
                <br />
                <textarea
                  cols="50"
                  rows="10"
                  className="review-box"
                  placeholder="Your Review"
                  value={review}
                  onChange={this.onChangeReview}
                />
                <br />
                <button
                  className="add-review-btn"
                  type="submit"
                  data-testid="delete"
                >
                  Add Review
                </button>
              </form>
              <div>
                <img
                  className="image"
                  alt="reviews"
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                />
              </div>
            </div>
            <hr />
            <p className="reviews-count">
              <span className="count"> {count} </span> Reviews
            </p>

            <ul className="reviews-list-container">
              {reviewsList.map((reviews) => (
                <ReviewItem
                  key={reviews.id}
                  reviews={reviews}
                  likeStatus={this.likeStatus}
                  onDeleteReview={this.onDeleteReview}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Review;
