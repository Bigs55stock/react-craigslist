import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <header className = "Header">
                <h5 className="info">Craigslist </h5>
                <h5 className="option"> help </h5>
                <h5 className="option"> safety </h5>
                <h5 className="option"> privacy </h5>
                <h5 className="option"> feedback </h5>
                <h5 className="option"> term </h5>
                <button className="option"> Post </button>
            </header>
        )
    }
}

export default Header;