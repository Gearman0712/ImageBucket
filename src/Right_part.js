import React ,{useState,useEffect} from 'react'
import Top_bar from './Top_bar';
import Search_Bar from './Search_Bar';
import Bottom_bar from './Upload_button1';
import { Output_bar } from './Output_bar';
function Right_part(props) {
    //const [searchBasedOnCategory ,setSearchBasedOnCategory] = useState(null);
    const [searchBasedOnAnything ,setSearchBasedOnAnything] = useState("");
    useEffect(() => {
        setSearchBasedOnAnything("");
        console.log("hello mic testing")
    }, [props.searchOnCategory])
    useEffect(() => {
        //do nothing just reload
    }, [searchBasedOnAnything])

    return (
        <div>
            <div className ="main"> 
          <div id ="top_bar">
          <Top_bar/>
          </div>
          
          <div id = "search_bar">
          <Search_Bar  search ={(ele) =>{
          setSearchBasedOnAnything(ele);
          }
          
          }
          searchBasedOnAnything ={searchBasedOnAnything}
          />
          </div>
          <div id = "output_bar">
           <Output_bar addCategory = {(ew) =>props.addCategory(ew)} searchOnCategory ={props.searchOnCategory} searchBasedOnAnything ={searchBasedOnAnything}/>
          </div>
      
          
          </div>
        </div>
    )
}

export default Right_part
