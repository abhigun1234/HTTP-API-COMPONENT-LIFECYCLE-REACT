import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props){
        super(props)

        console.log("LifecycleB constructor")
       }
     render() {
       console.log("LifecycleB render")
       return (
         <div>LifecycleB</div>
         
       )
      
     }
     componentDidMount(){
       console.log("LifecycleB componentDidMount")
     }
}

