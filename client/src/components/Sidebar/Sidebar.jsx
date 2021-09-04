import React from 'react';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';//home
//import WorkIcon from '@material-ui/icons/Work';//jobs
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';//connect
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';//ideaForum
import FaceSharpIcon from '@material-ui/icons/FaceSharp';//profile
import InboxIcon from '@material-ui/icons/Inbox';//inbox


import SidebarElement from './SidebarElement';
import '../../StyleSheet/Sidebar.css'
const Sidebar=()=>{
    return(
        <div className='sidebarContainer'>
            <div className='LogoSpace'>
                <BusinessCenterRoundedIcon className="Logo"/>
                
            </div>
            <div className='SideBar'>
                <a href="/"><SidebarElement Icon={HomeRoundedIcon} text={`Home`}/></a>
                <SidebarElement Icon={PeopleAltIcon} text={`Connect`}/>
                <SidebarElement Icon={WbIncandescentOutlinedIcon} text={`Ideas`}/>
                <a href="/my-profile"><SidebarElement Icon={FaceSharpIcon} text={`Profile`}/></a>
                <a href="/inbox"><SidebarElement Icon={InboxIcon} text={`Inbox`}/></a>
            </div>
        </div>
    )
}
export default Sidebar;