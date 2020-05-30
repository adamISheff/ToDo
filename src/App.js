import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Scroll from './components/Scroll';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import ChuckJoke from './components/ChuckJoke';
import DadJoke from './components/DadJoke';

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
      },
      {
        id: 4,
        title: 'Milk the Cow',
        completed: false
      }
    ]
  }
  
  // Toggle complete value in the todos object clicked
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }
  
  // Delete To Do item
  delTodo = (id) => {
    this.setState({ todos: [this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newId = this.state.todos.length + 1;
    const newTodo = {
      id: newId,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
      return (
        <Router>
          <div className="App">
            <Header />
            <DadJoke />
            <ChuckJoke />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Scroll>
                  <Todos 
                    todos={this.state.todos} 
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
                  />  
                </Scroll>
              </React.Fragment>
            )} />        
            <Route path="/about" component={About}   />   
          </div>
        </Router>
      );
    }  
}

export default App;
