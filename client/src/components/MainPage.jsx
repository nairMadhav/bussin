import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Recommendations from './Recommendations/Recommendations'
import Timeline from './Timeline/Timeline'
import '../StyleSheet/MainPage.css'

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Sidebar/>
            <Timeline/>
            <Recommendations/>
        </div>
    )
}

export default MainPage
