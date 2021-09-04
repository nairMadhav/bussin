import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Recommendations from './Recommendations/Recommendations'
import Timeline from './Timeline/Timeline'
import '../StyleSheet/MainPage.css'
import Profile from './Profile/Profile'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Messaging from './Messaging/Messaging'

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Timeline/>
                </Route>
                <Route exact path="/inbox">
                    <Messaging/>
                </Route>
                <Route exact path="/my-profile">
                    <Profile/>
                </Route>
                <Recommendations/>
            </Switch>
        </div>
    )
}

export default MainPage
