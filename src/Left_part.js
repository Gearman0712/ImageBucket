import React from 'react'

import categoriesdata from './categoriesdata'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'aliceblue',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
    
  },
  listSection: {
    backgroundColor: 'white',
   
  },
  ul: {
    backgroundColor: 'aliceblue',
    padding: 0,
    
    
  },
}));
function Left_part(props) {
 
  console.log("leftpart");
  console.log(props.category);
  console.log("leftpart1");
  function handleclick (e)
  { props.changeSearchOncategory(e.target.innerHTML); 
   // (item) =>{props.changeSearchOncategory(item)
   console.log("handleclick");
      console.log(e.target.innerHTML);
  
  }

  const classes = useStyles();
  return (<>
  <List id = "parent-list" className={classes.root} subheader={<li />}>
  {[0].map((sectionId) => (
    <li key={`section-${sectionId}`} className={classes.listSection}>
      <ul className={classes.ul}>
        <ListSubheader><h1 id='category_heading'>Categories</h1></ListSubheader>
        {
          [...props.category].map((item) => (
          <ListItem key={`item-${sectionId}-${item}`}>
            <ListItemText className ="liOfcategory"  primary={` ${item.toUpperCase()}` } onClick ={handleclick}/>;
           
           
          </ListItem>
        ))}
      </ul>
    </li>
  ))}
</List>
  </>)
 
}

export default Left_part
