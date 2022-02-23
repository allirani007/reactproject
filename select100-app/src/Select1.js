import React,{Component} from "react";
import Select from "react-select";
import axios from "axios" ;


export default class Select1 extends Component{
  constructor(props){
    super(props)
    this.State={
      selectOption:[],
      id : "",
      name: ''
    }
  }

  async getOption() {
    const res=await axios.get('https://jsonplace holder.typicode.com/users')
    const data=res.data;
    const options=data.map(d=>({
      "value" : d.id,
      "lable" : d.name
    }))
  this.setState({selectOption:options })
  }
handlechange(e){
  this.setState({id:e.value,  name:e.lable})
}
componentDidMount(){
  this.getOption();
}
render(){
  console.log(this.State.selectOption)
  return(
    <div>
      <p> welcome to the Great allirani's web world </p> 
      <select option={this.State.selectOption} onChange={this.handlechange.bind(this)} />
          </div>
  )
}
}