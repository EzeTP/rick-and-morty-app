import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from './components/Cards/CardDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />
        <Route path='/locations' element={<Location />} />
        <Route path='/locations/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');
  let [apiData, updateapiData] = useState([]);
  let { info, results } = apiData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateapiData(data);   // wait a little bit, untill our data it's fetch
    })();

  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
