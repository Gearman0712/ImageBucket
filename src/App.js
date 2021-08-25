import React from 'react'
import ReactDOM from 'react-dom'
import ImgBuck from './ImgBuck'
import Auth from './Auth'
import { AuthProvider } from './AuthContext'
import { BrowserRouter as Router ,Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute"


export default function App() {

    return (
      <AuthProvider>
         <Router>
            <Switch>
              <Route exact path ="/auth" component ={Auth}/>
              <PrivateRoute exact path ="/imgBuck" component ={ImgBuck}/>
              
              <Route
                exact
                path="/"
                render={() => {
                    return (
                       
                        <Redirect to="/auth" /> 
                     
                    )
                }}
            />
            </Switch>

         </Router>

 
        {/* <div>
      <div className ="s" id ="App" >
      <Auth/> 
      </div>
        </div> */}
        </AuthProvider>
    )
}
