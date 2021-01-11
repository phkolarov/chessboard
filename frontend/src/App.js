import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ApplicationWrapper from './components/ApplicationWrapper'
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {initializeApplicationData} from './redux/actions/game.actions'
import {buildRoutes} from './redux/actions/routes.actions'


function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(initializeApplicationData())
    }, [])

    return (
        <Router>
            <div className="App">
                <ApplicationWrapper/>
            </div>
        </Router>

    );
}

export default App;
