import React ,{useState,useEffect}from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import BackupIcon from '@material-ui/icons/Backup';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import {storage,dbRef} from "./firebase.js";
import {useAuth} from './AuthContext'
import '@tensorflow/tfjs-backend-cpu';

const mobilenet = require('@tensorflow-models/mobilenet');
const admin = require('firebase-admin');
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

export default function Upload_button1(props) {
  const classes = useStyles();
  const [url ,setURL] = useState("");
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const {currentUser} = useAuth();
 
//  console.log(items)
  // useEffect(()=>{console.log('upload')},[file,url , predictions]);

   async function handleChange(e) {
    setFile(e.target.files[0]);
    if(e.target.files[0] ==null)  console.log(`not an image, the image file is a ${typeof(imageAsFile)}`);
    else
    {   handleUpload(e)
        getPredictions(e);
    }
  }
    useEffect(async()=>{
   if((file!== null) && (url!=="") && (predictions != null))
     { var str="";
      
      for( var i=0 ;i<predictions.length ;i++)
      {
          str += predictions[i].className;
          if(i!==predictions.length -1)
          str += ", ";
 
      }
    //   var arr = predictions.split(",");
      
     
    //  const categoryRef = dbRef.collection('categories').doc('u');
    //   const multipleUnionRes = await categoryRef.update({
    //    // category: admin.firestore.FieldValue.arrayUnion('south_carolina', 'texas')
    //     // Alternatively, you can use spread operator in ES6 syntax
    //      category: admin.firestore.FieldValue.arrayUnion(...arr)
    //   });
    
   console.log('firle');
   console.log(url);
   console.log(predictions);
   var am =file.name;
      var metadata = {
       title: am.toLowerCase(),
       date : new  Date().toLocaleString(),
       categories : str ,
       url:url
 
     };
 
    setFile(null);
    setURL("");
    setPredictions({});
     const res = await dbRef.collection('list').doc().set(metadata);
    console.log("useeffect");
    props.changeTriger();
    }
    },[predictions ,file ,url]);


 async function getPredictions (e)
  { 
  var img = document.createElement("img");

     img.src = URL.createObjectURL(e.target.files[0]);
   await mobilenet.load().then(async(model) => {
      // Classify the image.
   model.classify(img).then(prediction => {
       
        setPredictions(prediction);
        
        return prediction;
       
      });
    });
  }
   async function handleUpload(e) {

    e.preventDefault();
   const  currFile =e.target.files[0];
    const ref = storage.ref(`/users/${currentUser}/images/${currFile.name}`);
    const uploadTask = ref.put(currFile);

   uploadTask.on('state_changed',(snap) =>{ console.log('uploading')},(err) =>{ console.error(err)},async () => {
     ref.getDownloadURL()
        .then((url) => {
          setURL(url);
          console.log(url);
          
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