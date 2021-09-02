import React ,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 300
  },
});

 
  

export default function Pic(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const classes = useStyles();
  console.log(props.item.data());
const changeOpen =() =>{
  console.log('yuyuy');
props.opendetails(true, props.item.data());
}
const deletePic =() =>
{setOpen(true);
 // console.log("deletePic" );
 // props.deleteItem(props.item);

}
const deleteYes =() =>{
  handleClose();
  props.deleteItem(props.item);
}
// useEffect(() => {
// }, [open])
  return (
      <>
     
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="IMAGE"
          height="140"
          
          image = {props.item.data().url}
       
          title={props.item.data().title}
        />
        <CardContent style={{backgroundColor: '#f2f2f2'}}>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2" align ="left">
          {props.item.data().title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" color="textSecondary"component="h2" align ="left">
          Last Updated : {props.item.data().date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick ={deletePic}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick ={changeOpen}>
          Details
        </Button>
      </CardActions>
    </Card>
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Pic"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do  You want to delete the pic ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={ deleteYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
    </>
  );
}
