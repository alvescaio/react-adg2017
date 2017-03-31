import React from 'react';
import logo from './logo.svg';
import './App.css';

import pokemon from 'pokemon';

class Link extends React.Component {
    render() {
        return (
            <a className="mdl-button mdl-button--accent" target="_blank"
                href={this.props.link}>{this.props.texto}</a>
        );
    }
}

class PesquisaImagem extends React.Component {
    render() {
        return(
            <Link link={"https://www.google.com.br/images?q=" + this.props.pesquisa} texto={this.props.pesquisa}/>
        );
    }
}

class ListaPokemons extends React.Component {
    render() {
        var lista = this.props.lista;
        var listaPokemons = lista.map(function(pokemon) {
            return <PesquisaImagem pesquisa={pokemon}/>
        });
        return (
            <div>
                {listaPokemons}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
    }

    adicionarPokemon() {
        var novaLista = this.state.lista;
        novaLista.push(pokemon.random());
        this.setState({ lista: novaLista });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Pokemons incríveis</h2>
                </div>
                <br/>
                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.adicionarPokemon()}>
                    Novo pokemon!
                </button>
                <br/>

                <ListaPokemons lista={this.state.lista}/>
            </div>
        );
    }
}

export default App;
