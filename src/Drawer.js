import React,{useEffect} from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function TemporaryDrawer(props) {
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
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      <h3>  Title: {props.content.title} </h3>
      <img src={props.content.url} alt="loading" width="200" height="200"/>
      </List>
      <Divider />
      <List>
      <h6>  categories: {props.content.categories} </h6>
      <h5>  Date and Time: {props.content.date} </h5>
    
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
