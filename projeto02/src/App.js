import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank" className="mdl-button mdl-button--accent">{this.props.texto}</a>
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

                <Link link="https://www.google.com.br" texto="Google" />
                <Link link="https://www.github.com/tibuurcio" texto="Github" />
                <Link link="http://www.ect.ufrn.br/" texto="Site da ECT"/>
            </div>
        );
    }
}

export default App;
