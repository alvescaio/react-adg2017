# Projeto 04

E se quisessemos que ao invés de o nome do pokemon mudar toda vez, pudessemos adicionar vários pokemons novos ao mesmo tempo? Para isso, ao invés de gerar um novo pokemon no clique do botão. Podemos salvar uma lista de componentes `ProcuraImagem` e adicionar novos elementos a essa lista.

```javascript
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
```

Assim, temos agora vários pokemons e podemos pesquisar pela imagem de vários ao mesmo tempo.