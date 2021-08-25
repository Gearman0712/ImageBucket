import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect,useRef} from 'react';
import {useAuth} from './AuthContext'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {link , useHistory} from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Image Bucket
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const emailRef= useRef();
  const passwordRef= useRef();
  const confirm_passwordRef= useRef();
  const {signup, currentUser ,login} = useAuth()
  const [isLogin ,setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

              const [open, setOpen] = React.useState(false);

              const handleAlert = () => {
                setOpen(true);
              };

              const handleClose = (event, reason) => {
                if (reason === 'clickaway') {
                  return;
                }

                setOpen(false);
                setMessage('');
                setSeverity('');
              };
              
  const handleSignupandLogin = () =>{
  
    setIsLogin(!isLogin);
   
   }
   
 async function handleSubmit(e)
 { e.preventDefault();
  console.log('hi');
    if(isLogin ===false) /// signup section
  {   console.log(passwordRef.current.value);
    console.log(confirm_passwordRef.current.value);
   if(passwordRef.current.value != confirm_passwordRef.current.value)
       {
          
          setMessage('Password do not Match');
          setSeverity('warning');
          handleAlert();
          return setError('Password do not Match')
       }
    
       else{ try
        { setError('');
        setLoading(true)
          await signup(emailRef.current.value,passwordRef.current.value)
          setMessage('Account Created');
          setSeverity('success');
          handleAlert();
          history.push("/imgBuck");
        }
        catch {
          setError('Failed to create an account')
          setMessage('Failed to create an account');
          setSeverity('error');
          handleAlert();
        }

    
     setLoading(false);
        


  } }
  else   // login section
  {
    try
        { setError('');
        setLoading(true);
          await login(emailRef.current.value,passwordRef.current.value)
          // setMessage('Account Created');
          // setSeverity('success');
          // handleAlert();
          history.push("/imgBuck");
        }
        catch {
          setError('Failed to Login')
          setMessage('Failed to Login');
          setSeverity('error');
          handleAlert();
        }

    
     setLoading(false);
  

  }

 }
   useEffect(() => {
  
  
  }, [isLogin])
  

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
         { message}
      
        </Alert>
      </Snackbar>

      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {error}
          <Typography component="h1" variant="h5">
            { isLogin==true ? "Log in":"Sign up"
             }
          </Typography>
          <form className={classes.form} onSubmit ={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              type ="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef ={emailRef}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef ={passwordRef}
              
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {  
                isLogin==false ?  <div>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Confirm_password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="confirm-password"
              inputRef ={confirm_passwordRef}
            />
           
                </div> :""



            }
            <Button disabled = {loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             {
              isLogin==true ? "Log in":"Sign up"
             }
            </Button>
            <Grid container>
             
              <Grid item>
              <div onClick ={handleSignupandLogin}>
                <Link  variant="body2">
                  {isLogin === true?  "Don't have an account? Sign Up": "Have an account ? Log in"}
                </Link> </div>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}