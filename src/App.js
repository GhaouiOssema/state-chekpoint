import React from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

class App extends React.Component{

  state = {
     FullName : "Oussema Ghaoui",
     bio : "Hello Here , Im a Full Stack JS Student At : Go My Code",
     imgSrc : "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/157294136_1759609547547063_57600891643970242_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9VIADgffH0UAX9-GGkN&tn=9Fv8zdEneVS1tuu2&_nc_ht=scontent.ftun16-1.fna&oh=41e7c0903679b1a64400333cf83de71a&oe=60D47B85" ,
     profession  : "MERN  Stack Developer",
     Show : true ,
     hide : false 
  }

  handleShow = () => {
      this.setState({
          isActive: this.state.Show
      })
    }

  handleHide = () =>{
      this.setState({
          isActive: this.state.hide
      })
  }


   render(){
       return(
           <div className="App">
             <h3>Welcome to Profile Page</h3>
           {
             this.state.isActive 
             ? <div className="container">
               <img src={this.state.imgSrc} alt="oussema ghaoui" className="imgSrc"/>
               <h1>{this.state.FullName}</h1>
               <h1>{this.state.bio}</h1>
               <h1>{this.state.profession}</h1>
               </div>
             : null 
           }
            <div className="btn-section">
              <Button 
               variant="success" 
               onClick={this.handleShow} 
               style={{borderRadius : 30}}
               size="sm"
               block
              >
                 Show Profile
              </Button>
              <Time style={{backgroundColor : "red"}} />             
              <Button
               variant="danger"
               onClick={this.handleHide}
               style={{borderRadius : 30}}
               size="sm"
               block
              >
                Hide Profile
              </Button> 
            </div>
           </div>
       )
   }
}

// this is the time field component
const Time = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <label style={{fontSize : 20, marginLeft : "33%"}} >
        &nbsp;mounting : {seconds} 
      </label>
    </div>
  );
};

export default App;

