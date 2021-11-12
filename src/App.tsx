import React from 'react';
import './App.css';
import './components/search/Search.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/react-fontawesome'
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Description from "./components/Description/Description";

function App() {
    return (
        <div className="App">
            <div className="container">
                <main>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path='/details/:id' element={<Description/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
