import React from 'react';
import ReactDOM from 'react-dom';
import './public/home.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.detalhesCasa = this.detalhesCasa.bind(this)

    this.callApi()
      .then(res => this.setState({ casas: res }))
      .catch(err => console.log(err));
  }

  state = {
    response: '',
    casaSelecionada: 5
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ casas: res }))
  //     .catch(err => console.log(err));
  // }

  callApi = () => {
    return fetch('/api/casas')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });



    const response = fetch('/api/casas');
    const body = response.json();
    console.log(body);

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  detalhesCasa(casa) {
    this.setState({ casaSelecionada: casa }, () => {
      console.log(this.state);

      document.getElementById("lista").style.display = "none";
      document.getElementById("detalhes").style.display = "block";
      //ReactDOM.render(<DetalhesCasa casa={this.state.casaSelecionada} />, document.getElementById("contente"));
    });
  }

  //<Route path="/detalhesCasa" render={x=> <DetalhesCasa casa={this.state}/>} />
  render() {

    var imageStyle = { height: '225px', width: '100%', display: 'block' };
    var _this = this;
    var hide = { display: 'none' };

    function clickView(casa) {
      _this.detalhesCasa(casa);
    };

    if (this.state.casas == null)
      return 'Carregando...';

    return (
      <div id="contente">

        <div id="detalhes" style={hide}>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={imageStyle} src={this.state.casaSelecionada.urlImagem} alt="Imagem da casa" data-holder-rendered="true" />


              <div className="card-body">
                <p className="card-text">{this.state.casaSelecionada.descricao}</p>
                <p className="card-text">Cor: {this.state.casaSelecionada.cor}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button onClick={() => clickView(this.state.casaSelecionada)} type="link" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <div className="text-muted">9 mins</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id="lista" role="main">
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
                {this.state.casas.map(function (obj, index) {
                  return (
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" style={imageStyle} src={obj.urlImagem} alt="Imagem da casa" data-holder-rendered="true" />


                        <div className="card-body">
                          <p className="card-text">{obj.descricao}</p>
                          <p className="card-text">Cor: {obj.cor}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button onClick={() => clickView(obj)} type="link" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <div className="text-muted">9 mins</div>
                          </div>

                        </div>
                      </div>
                    </div>);
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
