import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Left_part from './Left_part';
import Right_part from './Right_part';
import {useEffect ,useState} from 'react'


function ImgBuck() {
  
  const [category ,setCategory] =useState([]);
  const [searchOnCategory ,setSearchOnCategory] =useState("");
  useEffect(()=>{
    console.log("IMGBUCK");
    setSearchOnCategory("");
  },[category])
   
  console.log("img");
  console.log(category);
  console.log("img1");
  
  

  return (
    <div className="App">
     <Grid container spacing={0}>
        <Grid className ="left_part" item xs={2}>
       
         <Left_part category ={category}
            changeSearchOncategory ={(cat) =>{
              setSearchOnCategory(cat);
            }}
         />
        </Grid>
        <Grid className ="right_part"  item xs={10}>
       <Right_part 
        searchOnCategory ={searchOnCategory}
        addCategory ={(ew)=>{
         setCategory(ew);
       }}
       />
      
        </Grid>
        </Grid>
    </div>
  );
}

export default ImgBuck;
