# Projeto 01

Essa é a estrutura base que vamos utilizar para começar nosso projeto. Iremos trabalhar apenas no arquivo `App.js` que é onde está o código principal da aplicação.

O componente App representa o componente pai da aplicação, a partir dele iremos adicionar novos componentes.

```javascript
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>
            </div>
        );
    }
}
```



