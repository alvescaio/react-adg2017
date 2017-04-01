# Projeto 03

Com nossos dois componentes `Link` e `PesquisaImagem` criados, vamos agora trabalhar o conceito de **state** ou **estado** de um componente.

Antes de criar nosso componente, vamos instalar um módulo do NPM chamado `pokemon`. Esse módulo nos fornece acesso ao nome de todos os pokemons, bem como uma função que retorna um nome aleatório.

No terminal, rodar o seguinte comando:

```
npm install pokemon
```

Em seguida, vamos importar a biblioteca para que tenhamos acesso a função `pokemon.random()`, adicionando a seguinte linha no topo do arquivo `App.js`.

```
import pokemon from 'pokemon'
```

Precisamos então adicionar uma forma de manter algum estado em nosso componente principal. Para isso, vamos adicionar um construtor com um estado inicial e exibir esse estado na página.

```javascript
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomePokemon: ''
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>

                <p>{ this.state.nomePokemon }</p>
            </div>
        );
    }
}
```

Entretanto, percebemos que isso não nos mostra nada, pois o estado inicial de `nomePokemon` é vazio. Vamos agora adicionar um botão ao nosso app que ao ser clicado mude o estado do componente.

```javascript
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

                <button onClick={() => this.mudarPokemon()}>Mudar Pokemon</button>
                <p>{ this.state.nomePokemon }</p>
            </div>
        );
    }
}
```

Para finalizar, vamos adicionar estilo ao nosso botão:

```javascript
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

                <p>{ this.state.nomePokemon }</p>
            </div>
        );
    }
}
```

Fica muito fácil agora fazer com que possamos pesquisar a imagem de cada pokemon através do nome, devido ao modo como criamos cada componente separadamente.

Vamos substituir o elemento `<p></p>` pelo nosso componente `PesquisaImagem` que definimos anteriormente.

```javascript
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

                <PesquisaImagem pesquisa={ this.state.nomePokemon }>
            </div>
        );
    }
}
```
