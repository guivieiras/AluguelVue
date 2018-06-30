import React from 'react';
import ReactDOM from 'react-dom';
import './public/home.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.detalhesCasa = this.detalhesCasa.bind(this)
  }

  state = {
    response: '',
    casaSelecionada: 5
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/teste');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  detalhesCasa(casa) {
    this.setState({ casaSelecionada: casa }, () => {
      console.log(this.state);
      ReactDOM.render(<DetalhesCasa casa={this.state.casaSelecionada} />, document.getElementById("contente"));
    });
  }

  //<Route path="/detalhesCasa" render={x=> <DetalhesCasa casa={this.state}/>} />
  render() {
    return (
      <div id="contente">
        <CasasList casas={this.props.casas} detalhesCasa={this.detalhesCasa} />, document.getElementById("contente")
      </div>
    );
  }
}

class DetalhesCasa extends React.Component {
  render() {
    return (<div>{this.props.casa.id}</div>);
  }
}

class CasasList extends React.Component {
  render() {
    var detalhesCasa = this.props.detalhesCasa;
    return (
      <div role="main">
        <section className="jumbotron text-center" id="presentation">
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a className="btn btn-primary my-2">Main call to action</a>
              <a className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.props.casas.map(function (obj, index) {
                return (
                  <CasaFrame casa={obj} detalhesCasa={detalhesCasa} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CasaFrame extends React.Component {
  render() {
    var imageStyle = { height: '225px', width: '100%', display: 'block' };
    function clickView(props) {
      props.detalhesCasa(props.casa);
    };
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" style={imageStyle} src={this.props.casa.urlImagem} alt="Imagem da casa" data-holder-rendered="true" />


          <div className="card-body">
            <p className="card-text">{this.props.casa.descricao}</p>
            <p className="card-text">Cor: {this.props.casa.cor}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button onClick={() => clickView(this.props)} type="link" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <div className="text-muted">9 mins</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default App;
