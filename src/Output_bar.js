import React ,{useState,useEffect}from 'react'
import Pic from './Pic'
import Upload_button1 from './Upload_button1'
//import items from './items.js'
import Drawer from './Drawer.js'
import {storage,dbRef} from "./firebase.js";

export const Output_bar = (props) => {

    const [content ,setContent] = useState({});
    const [status ,setStatus] = useState(false);
    const [category ,setCategory] = useState([]);
    const [displayList ,setdisplayList] = useState([]);
    const [triger ,setTriger] = useState(false);
    useEffect( async()=>{
      const citiesRef = dbRef.collection('list');
     const snapshot = await citiesRef.get();
     console.log(snapshot);
     var items = [];
     var cat=[];
      await snapshot.forEach(doc => {
        var arr = doc.data().categories.split(",");
        cat.push(...arr);
        console.log(arr);
      
        items.push(doc.data());
    
     }
    
)
const unique = [...new Set(cat)];
const newunique=unique.sort((a, b) => a.localeCompare(b));
setCategory(newunique);
  props.addCategory(newunique);
  
      setdisplayList(items);
      console.log("tata");
    },[triger]);
    useEffect(()=>{console.log('hi')},[content,displayList]);

    return (
        <>
        <div className ="main_output">
         
        {displayList.map((ele)=>{
      return<div className ="eachitem">
       <Pic item ={ele}
        opendetails ={(ew ,data)=>{
          setContent(data);
          setStatus(ew);
         // console.log('hello');
      }}

      />
      </div>;
        })
         
         }
         
        </div>
        <Drawer content={content} status ={status} changeDetails ={(ew)=>{
          setStatus(ew);
         // console.log('qwert');
      } }/> 
        <Upload_button1 changeTriger ={()=>{
          setTriger(!triger);
        }}/> 
        </>
    )
}
