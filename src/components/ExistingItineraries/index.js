import { Component } from "react";
import "./index.css";
import Header from "../Header";
import GuideItem from "../GuideItem";

import { itinerariesData } from "../ItinerariesData";

const itinerariesSearchData = itinerariesData;

class ExistingItineraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      filteredData: [],
    };
  }

  onChangeSearchInput = (event) => {
    const val = event.target.value.toLowerCase();

    const filtered = itinerariesSearchData.filter((city) =>
      city.title.toLowerCase().includes(val)
    );

    this.setState({ searchInput: event.target.value, filteredData: filtered });
  };

  handleSelected = (value) => {
    this.setState({ searchInput: value, filteredData: [] });
  };

  render() {
    const { searchInput, filteredData } = this.state;

    const filterDisplayData = itinerariesSearchData.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <>
        <Header />
        <div className="existing-itineraries-main-container">
          <div className="search-input-main-container">
            <h1 className="planning-heading">
              Explore travel guides and itineraries
            </h1>
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
                      onClick={() => this.handleSelected(guide.title)}
                    >
                      {guide.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <h1 className="guides-heading">Top Guides</h1>
          <div className="itineraries-results-container">
            <ul className="top-guides-list-container">
              {filterDisplayData.map((guideItem) => (
                <GuideItem key={guideItem.id} guideItem={guideItem} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ExistingItineraries;
