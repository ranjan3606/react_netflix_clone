import React from 'react';
import './App.css';
import requests from './components/Requests'

import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGIONALS" 
      fetchURL={requests.fetchNetflixOriginals} 
      isLargeRow={false}
      />
      <Row title="Treading Now" fetchURL={requests.fetchTrading} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movie" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romantic Movie" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentary Movie" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;



