import React from 'react';
import Home from "./pages/Home";
import Sidebar from './layout/Sidebar';
import './Twitter.css';
import Feed from './layout/Feed'

const Twitter = () => {
    return (
        <div className="app">
            <Sidebar/>

            <Feed/>
        </div>
    )
};
export default Twitter;