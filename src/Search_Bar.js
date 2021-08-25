import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Search_Bar() {
  const classes = useStyles();

  return (
    <div>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ImageSearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}