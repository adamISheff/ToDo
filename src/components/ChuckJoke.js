import React from 'react';

const chuck = {
    image: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    joke: 'Chuck hit 11 out of 10 targets with 9 bullets.'
}

class ChuckJoke extends React.Component {
    state = {
        image: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        joke: 'Chuck hit 11 out of 10 targets with 9 bullets.'
    }


    getChuckJoke = (e) => {
        // send request for new joke from api.chucknorris.io
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(stuff => this.setState({joke: stuff.value}))
    }

    render() {
        const {image, joke} = this.state;
        return (
            <div className='flex items-center justify-around ph4'>
                <img src={image} alt="The Chuck" width="100" height="100" className="grow" onClick={this.getChuckJoke} />
                <p className='yellow'>{joke}</p>
                <button className='yellow bg-purple' onClick={this.getChuckJoke}>Tell New Chuck Joke</button>
            </div>
        );
    }
}

export default ChuckJoke;