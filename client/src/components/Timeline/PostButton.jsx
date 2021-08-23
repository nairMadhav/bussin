import React from 'react'
import "../../StyleSheet/PostButton.css"

const PostButton = ({text}) => {
    return (
        <div className="PostButtonWrapper">
            {text}
            <button type="submit"></button>
        </div>
    )
}

export default PostButton
