/*THIS COMPONENT IS DEPRECATED 

DO NOT USE... IT DOESNT WORK

JUST USE STANDARD FILE INPUT WITH A LABEL OR SPAN

*/
import React from 'react'
import "../../StyleSheet/FileUploadButton.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
const FileUploadButton = (props) => {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    return (
        <div className="FileUploadWrapperButton">
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<ImageIcon/>}>
                    upload
            </Button>
        </div>
    )
}

export default FileUploadButton
