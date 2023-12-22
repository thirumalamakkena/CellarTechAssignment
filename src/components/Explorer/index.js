import { Component } from "react";
import "./index.css";
import Header from "../Header";
import CityItem from "../CityItem";

import { citiesData } from "../CitiesData";

const citiesSearchData = citiesData;

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      filteredData: [],
    };
  }

  onChangeSearchInput = (event) => {
    const val = event.target.value.toLowerCase();

    const filtered = citiesSearchData.filter((city) =>
      city.name.toLowerCase().includes(val)
    );

    this.setState({ searchInput: event.target.value, filteredData: filtered });
  };

  handleSelected = (value) => {
    this.setState({ searchInput: value, filteredData: [] });
  };

  render() {
    const { searchInput, filteredData } = this.state;

    const filterDisplayData = citiesSearchData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <>
        <Header />
        <div className="existing-itineraries-main-container">
          <div className="search-input-main-container">
            <h1 className="planning-heading">Explore Cities</h1>
            <div className="search-input-container search-container">
              <input
                value={searchInput}
                type="search"
                className="search-input"
                placeholder="Search for a destination"
                onChange={this.onChangeSearchInput}
              />
              {filteredData.length > 0 && (
                <ul className="search-results">
                  {filterDisplayData.map((guide) => (
                    <li
                      key={guide.id}
                      onClick={() => this.handleSelected(guide.name)}
                    >
                      {guide.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <h1 className="guides-heading">Top Guides</h1>
          <div className="itineraries-results-container">
            <ul className="top-guides-list-container">
              {filterDisplayData.map((cityItem) => (
                <CityItem key={cityItem.id} cityItem={cityItem} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Explorer;
