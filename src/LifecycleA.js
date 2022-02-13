import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props){
     super(props)
     this.state={name:'Abhishek'}
     console.log("LifecycleA constructor")
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>LifecycleA

          <LifecycleB></LifecycleB>
      </div>
      
    )
   
  }
  componentDidMount(){
    console.log("LifecycleA componentDidMount")
  }
}
