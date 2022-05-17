import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle'

export default class ParentLifeCycle extends Component {
    constructor(props){
        super(props)
       console.log("constructor called of parent")
    }
  render() {
    console.log("render called of parent")
    return (
      <div>ParentLifeCycle

      <ChildLifeCycle></ChildLifeCycle>
      </div>
      
    )
  }
  componentDidMount(){

    console.log("componentDidMount called of parent")
  }
}
