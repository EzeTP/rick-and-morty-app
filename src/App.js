import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";



function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [apiData, updateapiData] = useState([]);
  let {info, results } = apiData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {

    (async function(){      
        let data = await fetch(api).then(res=>res.json())
        updateapiData(data);   // wait a little bit, untill our data it's fetch
    })();

  },[api]);

  return (
    <div className="App">
      <h1 className="text-center poppins my-4"  >
        Rick and Morty <span className="text-success fw-bold">Wiki</span>
       </h1>

       <Search setPageNumber={setPageNumber} setSearch={setSearch} />

       <div className="container">
          <div className="row">
             <div className="col-3">
                <Filters />
              </div>
                <div className="col-8">
                  <div className="row">
                    <Cards results={results} />
                  </div>                    
            </div>
          </div>
        </div>

      <Pagination pageNumber={pageNumber} setPageNumber={ setPageNumber } />
    </div> 
  );
}

export default App;
