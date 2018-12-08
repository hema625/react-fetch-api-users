import React, { Component } from 'react';

class App extends Component {
constructor(props)  {
   super(props);
   this.state = {
     items : [],
     isLaunched : false
   }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
        this.setState({
           items : json,
           isLaunched : true
        })
  });
}

  render() {

    let {items,isLaunched} = this.state;

    if (!isLaunched) {
      return("Data is loading")
    }
    else{
        return (
      <div className="App">
      <ul>
             {
               items.map(num => {
                 return <li key = {num.id}>Name : {num.name} | Email :{num.email}</li>
               })
             }
      </ul>
      </div>
    );
        }
  }
}

export default App;
