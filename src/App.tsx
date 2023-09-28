import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
       <div className="d-flex">
        <Aside />
        <div className="flex-grow-1" style={{marginLeft:"66px"}}>
          <Header />
          <div className="row mt-5 mx-3">
            <div className="col-12 col-md-4">
              <Filter />
            </div>
            <div className="col-12 col-md-8 mt-4 mt-md-0">
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
