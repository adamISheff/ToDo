import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk the Dog',
        completed: false
      },
      {
        id: 3,
        title: 'Milk the Cow',
        completed: false
      }
    ]
  }
  
  render() {
    console.log(this.state.todos);
      return (
        <div className="App">
          <Todos todos={this.state.todos} />
        </div>
      );
    }  
}


export default App;