import React, { Component } from 'react'
import '../App.css';



export default class ShowItem extends Component {

    // state Date
    state = {
        FullName : "Oussema Ghaoui",
        bio : "Hello Here , Im a Full Stack JS Student At : Go My Code",
        imgSrc : "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/157294136_1759609547547063_57600891643970242_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9VIADgffH0UAX9-GGkN&tn=9Fv8zdEneVS1tuu2&_nc_ht=scontent.ftun16-1.fna&oh=41e7c0903679b1a64400333cf83de71a&oe=60D47B85" ,
        profession  : "MERN  Stack Developer",
        counter : 0,
        condition : "show profile"
     }

    //  All methods
   
     componentDidMount(){
        setInterval(() => {
                this.setState({counter : this.state.counter + 1})
        },1000)
    }
    render() {
        return (
            <div className="container">
                  <img src={this.state.imgSrc} alt="oussema ghaoui" className="imgSrc"/>
                  <h1>{this.state.FullName}</h1>
                  <h1>{this.state.bio}</h1>
                  <h1>{this.state.profession}</h1>
                  <h2 style={{fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" ,   color: "#17457e" }} >
                    Counter : <span style={{color : "#f01", fontWeight:"bold"}} >{this.state.counter}</span>
                  </h2>
                  </div>        
        )
    }
}
