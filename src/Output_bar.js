import React ,{useState,useEffect}from 'react'
import Pic from './Pic'
import Upload_button1 from './Upload_button1'
import items from './items.js'
import Drawer from './Drawer.js'


export const Output_bar = () => {

    const [content ,setContent] = useState(false);
    useEffect(()=>{console.log('hi')},[content ]);

    return (
        <>
        <div className ="main_output">
         
        {items.map((ele)=>{
      return<div className ="eachitem">
       <Pic item ={ele}
        opendetails ={(ew)=>{
          setContent(ew);
         // console.log('hello');
      }}

      />
      </div>;
        })
         
         }
         
        </div>
        <Drawer content={content}  changeDetails ={(ew)=>{
          setContent(ew);
         // console.log('qwert');
      } }/> 
        <Upload_button1/> 
        </>
    )
}
