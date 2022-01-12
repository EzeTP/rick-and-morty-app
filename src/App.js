import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";



function App() {
  let api = `characters": "https://rickandmortyapi.com/api/character`;

  return (
    <div className="App">
      <h1 className="text-center poppins my-4"  >
        Rick and Morty <span className="text-success fw-bold">Wiki</span>
       </h1>

       <div className="container">
          <div className="row">
             <div className="col-3">
                <Filters />
              </div>
                <div className="col-8">
                  <div className="row">
                    <Cards />
                  </div>                    
            </div>
          </div>
        </div>

    </div> 
  );
}

export default App;
