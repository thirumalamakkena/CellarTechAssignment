import { Component } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import PlanItem from "../PlanItem";
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

class CreatePlan extends Component {
  state = {
    count: 0,
    name: "",
    review: "",
    destination: "",
    reviewsList: [],
  };

  onChangeReview = (event) => this.setState({ review: event.target.value });

  onChangeDestination = (event) =>
    this.setState({ destination: event.target.value });

  addReview = (event) => {
    event.preventDefault();
    const { count, destination } = this.state;

    if (destination === "") {
      return;
    }

    const newItem = {
      id: uuidv4(),
      destination,
      isLiked: false,
      bgColor: initialContainerBackgroundClassNames[count % 7],
    };

    this.setState((prevState) => ({
      reviewsList: [...prevState.reviewsList, newItem],
      count: prevState.count + 1,

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
    const { count, reviewsList, destination } = this.state;

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="reviews-container">
            <h1 className="reviews-title">My Plans</h1>
            <div className="input-container">
              <form onSubmit={this.addReview}>
                <p className="heading">
                  Make Your own Plans and explore different cities
                </p>

                <br />
                <input
                  className="name-input"
                  placeholder="Add Place"
                  value={destination}
                  onChange={this.onChangeDestination}
                />
                <br />

                <button
                  className="add-review-btn"
                  type="submit"
                  data-testid="delete"
                >
                  Add Plan
                </button>
              </form>
            </div>
            <hr />
            <p className="reviews-count">
              <span className="count"> {count} </span> Plans
            </p>

            <ul className="reviews-list-container">
              {reviewsList.map((reviews) => (
                <PlanItem
                  key={reviews.id}
                  reviews={reviews}
                  likeStatus={this.likeStatus}
                  onDeleteReview={this.onDeleteReview}
                  count={count}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePlan;
