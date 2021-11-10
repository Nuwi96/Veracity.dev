import React from 'react';
import './App.css';
import './components/search/Search.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/react-fontawesome'
import Search from "./components/search/Search";
import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";

function App() {
    let RouterProps = {'location':'/description'};
    return (
    <div className="App">
        <div className="container">
            <Search/>
            <Filter/>
            <Table/>
        </div>
    </div>
  );
}

export default App;
