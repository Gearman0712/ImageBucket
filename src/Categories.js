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
    backgroundColor: 'red',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
  },
  listSection: {
    backgroundColor: 'white',
  },
  ul: {
    backgroundColor: 'azure',
    padding: 0,
  },
}));
export const Categories = () => {
    console.log(categoriesdata);
    const classes = useStyles();
    return (<>
    <List className={classes.root} subheader={<li />}>
    {[0].map((sectionId) => (
      <li key={`section-${sectionId}`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>{` Categories `}</ListSubheader>
          {
            [...categoriesdata].map((item) => (
            <ListItem key={`item-${sectionId}-${item}`}>
              <ListItemText className ="liOfcategory"  primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
  </List>
    </>)
   
}
