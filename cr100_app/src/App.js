import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    emp: []
  }

constructor(){
super();
}
}
getEmployee() {
  axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        //const emps = res.data;
        //this.setState({ emps });
        console.log(res.data);
      })
}
componentDidMount(){
  this.getEmployee();
}
onSubmit(e) {
	e.preventDefault();
	const employee = {
		name: this.state.name,
		age: this.state.age,
		salary: this.state.salary,
	}
	axios.post('http://dummy.restapiexample.com/api/v1/employees', employee)
	.then(res => console.log(res.data));
}

update(e) {
  e.preventDefault();
  const employee = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary,
  }
  axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
  .then(res => console.log(res.data));
}


delete(e) {
	e.preventDefault();
	axios.delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
	.then(res => console.log(res.data));
}
export default App;
