# Projeto 01

Essa é a estrutura base que vamos utilizar para começar nosso projeto. Iremos trabalhar apenas no arquivo `src/App.js` que é onde está o código principal da aplicação.

Dentro da pasta do projeto no terminal, rode o seguinte comando: `npm start`. Uma página do browser vai abrir com nosso app rodando e sempre que modificarmos algum arquivo, a página ser recarregada.

O componente App representa o componente pai da aplicação, a partir dele iremos adicionar novos componentes.

```javascript
class App extends React.Component {
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

## Criando um componente Link

O react é baseado em re-utilizar componentes. Componentes são pedaços da interface re-utilizáveis que podemos definir para a aplicação.

Neste primeiro exemplo, estudaremos o conceito de **props**, ou **propriedades** de um componente. Vamos criar um componente Link que abre uma nova aba para um endereço que definimos como uma propriedade.

```javascript
class Link extends React.Component {
    render() {
        return (
            <a href="https://www.google.com.br" target="_blank">Google</a>
        );
    }
}
```

Em seguida, vamos adicionar o novo elemento Link a nossa página, colocando dentro do componente App.

```javascript
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello React</h2>
                </div>
                
                <Link />
            </div>
        );
    }
}
```

Por enquanto, nosso link sempre vai abrir a mesma página. Vamos agora passar algumas propriedades para o componente Link para que possamos definir qual página iremos abrir e qual texto será exibido.

```javascript
class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank">{this.props.texto}</a>
        );
    }
}
```

```javascript
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
```

Com isso, criamos nosso primeiro componente e tornamos reusável. Na próxima parte, vamos usar o componente Link que acabamos de criar em outro componente.
