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
            listaPokemons: [] //Lista começa vazia
        }
    }

    mudarPokemon() {
        var novaLista = this.state.listaPokemons; // Recuperar a lista anterior
        var novoPokemon = pokemon.random(); // Gerar um novo pokemon aleatoriamente
        var novaPesquisa = <PesquisaImagem pesquisa={novoPokemon}/>; // Criar um novo componente pesquisa
        novaLista.push(novaPesquisa); // Adicionar o novo componente a lista
        this.setState({listaPokemons: novaLista});
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
                    onClick={() => this.mudarPokemon()}>Novo Pokemon</button>
                <br />

                { this.state.listaPokemons }
            </div>
        );
    }
}

export default App;
