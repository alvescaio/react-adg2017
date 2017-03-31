import React from 'react';
import logo from './logo.svg';
import './App.css';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank">{this.props.texto}</a>
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
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>

                <PesquisaImagem pesquisa="React" />
                <PesquisaImagem pesquisa="Arduino" />
            </div>
        );
    }
}

export default App;
