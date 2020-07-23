import React, { Component } from "react";
//import "./styles.css";
import TripList from "./TripList";
import axios from "axios";
import './select.scss';

const continents = ["Filtrer par continent", "Afrique", "Amérique du Nord", "Amérique du Sud", "Asie", "Europe", "Océanie"];

export default class Filter extends Component {
  state = {
    articles: [],
    filter: "Asie"
  };
  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    axios
      .get("/api/trips")
      .then(res => res.data)
      .then(data => {
        this.setState({ articles: data });
      });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value
    });
  };

  render() {
    const { articles, filter } = this.state;
    const filteredTrips = articles.filter(article => !filter || article.continent_name === filter);
      return (
      <div className="App">
        <select className="select-css" onChange={this.handleFilterChange}>
          {continents.map(continent => (
            <option value={continent}>{continent}</option>
          ))}
        </select>
        <TripList articles={filteredTrips} />
      </div>
    );
  }
}
