import React from 'react';

class DadJoke extends React.Component {
    state = {
        setup: '',
        punchline: ''
    }


    getDadJoke = (e) => {
        // send request for new joke from api.chucknorris.io
        fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes')
            .then(response => response.json())
            .then(stuff => this.setState({
                setup: stuff.setup,
                punchline: stuff.punchline
            }))
    }

    render() {
        const {setup, punchline} = this.state;
        return (
            <div className='flex items-center justify-center pa4'>
                <p className='yellow'>{setup} {punchline}</p>
                <button className='yellow bg-purple mh4' onClick={this.getDadJoke}>Tell a Dad Joke</button>
            </div>
        );
    }
}

export default DadJoke;