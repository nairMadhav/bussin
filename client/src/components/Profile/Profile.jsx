import { Avatar} from '@material-ui/core'
import React from 'react'
import "../../StyleSheet/Profile.css"

const Profile = () => {
    return (
        <div className="ProfileContainer">
            <div className="HeaderContainer">
            <Avatar src="#" style={{"height":"100px","width":"100px","border":"10px solid darkorange"}}/>
            <h1>
                Username
            </h1>
            <br/>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum possimus repudiandae vero numquam minus est quae incidunt aliquam, quod fugiat totam quasi, nam soluta reprehenderit porro nostrum dolor, corporis nesciunt!
            </p>
             </div>
           
            
        </div>
    )
}

export default Profile
