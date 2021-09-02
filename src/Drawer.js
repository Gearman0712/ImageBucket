import React,{useEffect} from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  list: {
    // width: 250,
    maxWidth: 350,
    minWidth:350,
    
  },
  fullList: {
    width: 350,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

   useEffect(() => {
      setState(props.status);


   }, [props.status])


  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
    props.changeDetails(open);
  };

  const list = () => (
    <div className ="drawerImgMain"
      //className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    > 
     <List>
     <img className ="drawerImg" src={props.content.url} alt="loading" width="200" height="200"  />

    
      <ListItemText
          primary="Title:"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {props.content.title}
              </Typography>
             
            </React.Fragment>
          }
        />
      </List>
      <Divider />
      <List>
      <ListItemText
          primary="Categories:"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {props.content.categories}
              </Typography>
             
            </React.Fragment>
          }
        />
        <ListItemText
          primary="Last Updated:"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {props.content.date}
              </Typography>
             
            </React.Fragment>
          }
        />
    
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>{"right"}</Button> */}
      <Drawer anchor ={'right'} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
