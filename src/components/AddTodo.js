import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div className='flex items-center justify-around'>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default AddTodo