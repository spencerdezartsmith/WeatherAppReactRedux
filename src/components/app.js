import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'
import PageHeader from '../components/page_header'

export default class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
