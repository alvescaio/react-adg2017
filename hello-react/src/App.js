import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import pokemon from 'pokemon';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: ''
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>
                <br/>
                <button onClick={() => this.setState({ pokemon: pokemon.random() })}>Pokemon!</button>
                <br/>
                <h3>Pokemon incrível: {this.state.pokemon}</h3>
            </div>
        );
    }
}

export default App;
