import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (  
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <hr className="my-4" />
            <h1 className="display-4 text-center">User manager App</h1>
          <hr className="my-4" />
          </div>
        </div>    
    )
  }
}
