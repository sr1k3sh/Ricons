import React, { Component } from 'react'

export default class Ricon extends Component {
    render() {
        return (
           <React.Fragment>
               <img src={this.props.src}></img>
           </React.Fragment>
        )
    }
}
