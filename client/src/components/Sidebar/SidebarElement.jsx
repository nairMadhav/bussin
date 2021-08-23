import React from 'react';
import "../../StyleSheet/SidebarElement.css"
const SidebarElement=({Icon,text})=>{
    return(
        <div className="sidebarElement">
            <Icon className="sidebarIcon"/> 
            <p className="sidebarElementText">{text}</p>
        </div>
    )
}
export default SidebarElement;
