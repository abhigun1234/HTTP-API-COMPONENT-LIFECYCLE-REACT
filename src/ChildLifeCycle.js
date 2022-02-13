import React, { Component } from 'react'

export default class ChildLifeCycle extends Component {
    constructor(props){
        super(props)
       console.log("constructor called of child")
    }
  render() {
    console.log("render called of child")
    return (
      <div>ParentLifeCycle</div>
    )
  }
  componentDidMount(){

    console.log("componentDidMount called of child")
  }
}
