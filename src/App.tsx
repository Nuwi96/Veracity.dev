import React from 'react';
import './App.css';
import './components/search/Search.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/react-fontawesome'
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Description from "./components/Description/Description";


function App() {
    let RouterProps = {'location': '/description'};
    return (
        <div className="App">
            <div className="container">
                <main>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path='/details' element={<Description/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
