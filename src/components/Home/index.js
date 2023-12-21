import { Component } from "react";
import Header from "../Header";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { citiesData } from "../CitiesData";

import "./index.css";

const citiesSearchData = citiesData;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      searchInput: "",
      filteredData: [],
    };
  }

  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
  };

  onChangeSearchInput = (event) => {
    const val = event.target.value.toLowerCase();

    const filtered = citiesSearchData.filter((city) =>
      city.name.toLowerCase().includes(val)
    );

    this.setState({ searchInput: event.target.value, filteredData: filtered });
  };

  handleSelect = (value) => {
    this.setState({ searchInput: value, filteredData: [] });
    console.log("hii");
  };

  onCreatePlan = () => {
    const { history } = this.props;
    history.replace("/my-plan");
  };

  render() {
    const { startDate, endDate, searchInput, filteredData } = this.state;

    return (
      <>
        <Header />
        <div className="plannings-main-container">
          <div className="plannings-container">
            <h1 className="planning-heading">Plan a new trip</h1>
            <div className="search-input-container search-container">
              <input
                value={searchInput}
                type="search"
                className="search-input"
                placeholder="Where to? eg.Japan,Paris,Hawaii"
                onChange={this.onChangeSearchInput}
              />
              {filteredData.length > 0 && (
                <ul className="search-results">
                  {filteredData.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => this.handleSelect(item.name)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="search-input-container">
              <div className="date-range-picker">
                <div className="date-input">
                  <SlCalender />
                  <DatePicker
                    selected={startDate}
                    onChange={this.handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="date-picker-input"
                  />
                </div>
                <p className="cylinder">|</p>
                <div className="date-input">
                  <SlCalender />
                  <DatePicker
                    selected={endDate}
                    onChange={this.handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="date-picker-input"
                  />
                </div>
              </div>
            </div>
            <button className="planning-btn" onClick={this.onCreatePlan}>
              Start Planning
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
