import React, { Component } from 'react'
import PropTypes from 'prop-types';

import logo from './$hitCoder-logo-white.png';
import dumpTruck from './dump.png';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'linear-gradient(to right, rgb(159, 119, 186), rgb(0, 0, 0))',
            margin: '5px 25px',
            border: '1px rgb(255, 135, 0) solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'underline',
            color: this.props.todo.completed ? 'red' : 'black'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div 
            className='grow flex items-center'
            style={this.getStyle()} 
            onClick={this.props.markComplete.bind(this,id)}>
                    <img src={logo} alt="The Coder I Am" />
                    <p style={{marginRight: 25}}>{title}</p>
                    <img 
                    src={dumpTruck} alt="Dump Truck" 
                    style={{marginLeft: 50}}
                    onClick={this.props.delTodo.bind(this,id)} />
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
