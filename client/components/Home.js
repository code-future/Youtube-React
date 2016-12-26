import React from 'react';
import Header from './Header.js';
import SearchResults from './SearchResults';
import {youtubeAPI} from '../../config.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.searchYoutube.bind()
    this.state = {
      results: []
    }

  }
  searchYoutube(query) {
    var url = 'https://www.googleapis.com/youtube/v3/search?'
    var params = {
      q: query,
      part: 'snippet',
      key: youtubeAPI, //make sure this is right
      type: 'video'
    }
    $.getJson(url, params)
    .done(function(data) {
      //what do we do now?
    }) 
  }
  render() {
    return (
      <div>
        <Header search={this.search}/>
        <SearchResults results={""} />
      </div>
    )
  }
}