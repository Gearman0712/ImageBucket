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
    const [tempDisplayList ,settempDisplayList] = useState([]);
    const [triger ,setTriger] = useState(false);
   
    useEffect( async()=>{
      const citiesRef = dbRef.collection('list');
     const snapshot = await citiesRef.get();
     console.log(snapshot);
     var items = [];
     var itemswithId = [];
     var cat=[];
      await snapshot.forEach(doc => {
        var arr = doc.data().categories.split(",");
        cat.push(...arr);
        console.log(arr);
        itemswithId.push(doc);
        items.push(doc.data());
    
     }
    
)
const unique = [...new Set(cat)];
const newunique=unique.sort((a, b) => a.localeCompare(b));
setCategory(newunique);
  props.addCategory(newunique);
  
      setdisplayList( itemswithId);
      settempDisplayList(itemswithId);
      console.log(itemswithId);
      console.log("tata");
    },[triger]);

 useEffect(() => {
   if(props.searchOnCategory==="" || props.searchBasedOnAnything==="")
   settempDisplayList(displayList);
   if(props.searchOnCategory!=="" || props.searchBasedOnAnything!=="")
    {  searchOnDisplayList(props.searchOnCategory,props.searchBasedOnAnything);

    }


 }, [props.searchBasedOnAnything,props.searchOnCategory]);



    const deleteFromFirebase = (url) => {
      //1.
      let pictureRef = storage.refFromURL(url);
     //2.
      pictureRef.delete()
        .then(() => {
          //3.
          //setImages(allImages.filter((image) => image !== url));
          console.log("Picture is deleted successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  

    const searchOnDisplayList =( cat1 ,keyword) =>{
     
           settempDisplayList([]);
           var temparray =[];
           keyword.trim();
           cat1 = cat1.toLowerCase().trim();
           console.log(cat1+" "+keyword+"mic");
     for( let i=0;i<displayList.length;i++)
     {  console.log("shock");
        let str1 =displayList[i].data().title ;
        let str2 =displayList[i].data().categories ;
        str1.toLowerCase();
        str2.toLowerCase();
      console.log(str1 +" "+str2+"heloo")
        if(str1.search(cat1)!==-1 || (str2.search(cat1)!==-1)  ||cat1==="")
     {  if(keyword==="" ||keyword!=="" && (str1.search(keyword) !==-1 ||(str2.search(keyword)!==-1 )))
        temparray.push(displayList[i]);}
        // tempDisplayList.push(displayList[i]);
     }
     console.log(temparray);
     console.log("uppar");
     settempDisplayList(temparray);

    };
  

    const deleteFromdisplayList =(item) =>{
      var array = [...displayList];
    
      var filtered = array.filter(function(value, index, arr){ 
        return value.id != item.id;
    });

  setdisplayList(filtered);
  settempDisplayList(filtered);

    }
    useEffect(()=>{console.log('hi')},[content,displayList,tempDisplayList]);
    const deleteMainFunction = async(item) =>{
     
      
      const res = await dbRef.collection('list').doc(item.id).delete().then(() =>{
        deleteFromFirebase(item.data().url);
        deleteFromdisplayList(item);
        console.log('deleted succesfully');
      })
      console.log("res");
  console.log(res);
    }

    return (
        <>
        <div className ="main_output">
         
        {tempDisplayList.map((ele)=>{
      return<div className ="eachitem">
       <Pic item ={ele}
        deleteItem ={(dataID) =>{
          deleteMainFunction (dataID);
        }}
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
