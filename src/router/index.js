import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
 
  import { Component } from 'react';

  import FormPayment from '../pages/FormPayment';


  function App() {
      return(
            <BrowserRouter>

       
        <Switch>
        
        <Route exact path="/" component={FormPayment} />
        <Route path="/FormPayment" component={FormPayment} />
    
      </Switch>
      
      </BrowserRouter>

      )

  }
 
  export {App}