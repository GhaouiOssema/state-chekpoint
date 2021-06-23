import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// component
import ShowItem from './Component/ShowItem';
import { Button } from 'react-bootstrap';


class App extends React.Component{

  // STATE DATA 
  state = {
    Show : false ,
  }

  // Show button 
  handleShow = () => {
    this.setState({
        Show: !this.state.Show 
    })
  }

   render(){
       return(
           <div className="App">
             <h3>Welcome to Profile Page</h3>
                <div className="btn-section">
                    <Button 
                    variant="info" 
                    onClick={this.handleShow} 
                    style={{borderRadius : 30}}
                    size="sm"
                    block
                    >
                      {this.state.Show ? "Hide Profile" : "Show Profile"}
                    </Button>
                </div>
                {
                      this.state.Show ? <ShowItem/> : null
                }
           </div>
       )
   }
}



export default App;

