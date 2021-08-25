import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './par.jpeg'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Pic(props) {

  const classes = useStyles();
const changeOpen =() =>{
  console.log('yuyuy');
props.opendetails(true);
}
  return (
      <>
     
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="IMAGE"
          height="140"
          
          image = {props.item.src}
       
          title={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.item.title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary" onClick ={changeOpen}>
          Details
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
