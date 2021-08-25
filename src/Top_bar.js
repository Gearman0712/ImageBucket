import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {AccountCircleSharp} from '@material-ui/icons';
import {useAuth} from "./AuthContext"
import {useHistory} from 'react-router-dom'
export default function Top_bar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [error , setError] =useState("");
  const history = useHistory();
 const {currentUser,logout} =useAuth ();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    
    setAnchorEl(null);
  };
  const handleCl = () => {
    
    setAnchorEl(null);
   
    handleLogout();
  };
  const handleLogout = async () =>{
    setError('');
    try {
      
      await logout();
      console.log("check") 
     history.push('/auth');
      
    }catch
    {
      console.log("error") 
         setError('failed to log out')
    }

  }
  return (
    <div className ="nav_bar">
    <h1>IMAGE BUCKET</h1>
    
     
      <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       <AccountCircleSharp fontSize ='large'/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       
        <MenuItem onClick={handleClose}>{currentUser.email}</MenuItem>
        <MenuItem onClick={handleCl}>Logout</MenuItem>
      </Menu>
      </div>
  
  );
}