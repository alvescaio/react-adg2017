# Projeto 02

Com o componente `Link` completo, vamos agora criar outro componente que vai utilizar o componente Link dentro dele. Vamos criar um componente que pesquise algo nas imagens do google a partir de uma propriedade definida.

```javascript
class PesquisaImagem extends React.Component {
    render() {
        return(
            <p><Link link={"https://www.google.com.br/images?q=" + this.props.pesquisa} texto={this.props.pesquisa}/></p>
        );
    }
}
```

Colocamos o nosso `Link` entre tags `<p></p>` para que cada Pesquisa represente uma nova linha na página html.

Utilizaremos o componente Link que havíamos criado anteriormente com um link de pesquisa do google predefinido, mais uma propriedade que passamos ao componente.

```javascript
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>

                <PesquisaImagem pesquisa="react" />
                <PesquisaImagem pesquisa="Arduino" />
            </div>
        );
    }
}
```

Na próxima parte do projeto, veremos como adicionar estado aos nossos componentes.
