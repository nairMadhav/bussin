import React from 'react'
import "../../StyleSheet/FileUploadButton.css"
const FileUploadButton = ({Icon,type,handleChange}) => {
    return (
        <div class="FileUploadWrapperButton">
            <Icon/>
            <input type={type} name="postImage" accept=".jpg,.jpeg,.heic" onChange={handleChange}></input>
        </div>
    )
}

export default FileUploadButton
