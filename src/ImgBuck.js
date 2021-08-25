import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Left_part from './Left_part';
import Right_part from './Right_part';
 


function ImgBuck() {
  

  return (
    <div className="App">
     <Grid container spacing={0}>
        <Grid className ="left_part" item xs={2}>
       
         <Left_part/>
        </Grid>
        <Grid className ="right_part" item xs={10}>
       <Right_part/>
      
        </Grid>
        </Grid>
    </div>
  );
}

export default ImgBuck;
