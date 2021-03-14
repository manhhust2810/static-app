import React, { Component } from "react";
class Home extends Component {
    handle = () => {
        console.log("log");
    }

    render() {
        return(
            <h1 
                className="text"
                onClick={this.handle}
                >
                This is Home Page
            </h1>
        );
    }
}

export default Home;