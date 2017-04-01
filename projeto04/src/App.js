import React from 'react';
import logo from './logo.svg';
import './App.css';

import pokemon from 'pokemon';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank" className="mdl-button mdl-button--accent">{this.props.texto}</a>
        );
    }
}

class PesquisaImagem extends React.Component {
    render() {
        return(
            <p><Link link={"https://www.google.com.br/images?q=" + this.props.pesquisa} texto={this.props.pesquisa}/></p>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomePokemon: ''
        }
    }

    mudarPokemon() {
        this.setState({nomePokemon: pokemon.random()});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>

                <br />
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.mudarPokemon()}>Mudar Pokemon</button>
                <br />

                <PesquisaImagem pesquisa={this.state.nomePokemon}/>
            </div>
        );
    }
}

export default App;
