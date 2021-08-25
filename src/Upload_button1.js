import React ,{useState,useEffect}from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import BackupIcon from '@material-ui/icons/Backup';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import {storage} from "./firebase.js";
const useStyles = makeStyles((theme) => ({
  root: {
   
    '& > *': {
      margin: theme.spacing(1),
      color:'#fff',
      backgroundColor:'#fff',
      
    },
  },
  input: {
    display: 'none',
    
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function Upload_button1() {
  const classes = useStyles();
  const [url ,setURL] = useState("");
  const [file, setFile] = useState(null);
//  console.log(items)
   useEffect(()=>{console.log('upload')},[file]);

   function handleChange(e) {
    setFile(e.target.files[0]);
    if(e.target.files[0] ==null)  console.log(`not an image, the image file is a ${typeof(imageAsFile)}`);
    else
    handleUpload(e);
  }


   function handleUpload(e) {
   
    e.preventDefault();
   const  currFile =e.target.files[0];
    const ref = storage.ref(`/images/${currFile.name}`);
    const uploadTask = ref.put(currFile);

    uploadTask.on('state_changed',(snap) =>{ console.log('uploading')},(err) =>{ console.error(err)}, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }


  
  return (
   
    
    <div className={classes.root, 'upload_button' }>
     
   
     <Tooltip title="Upload Photo" aria-label="add" className={classes.absolute} >
     <div>
      <input accept="image/*" onChange ={handleChange} className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton  color="primary" aria-label="upload picture" component="span">
        
         <div className ="iconupload">
         <BackupIcon fontSize='inherit' />
          </div>
          
        </IconButton>
      </label>
      </div>
      </Tooltip>
     
    </div>
   
      
  );
}