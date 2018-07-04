<template>
<div id="lista" role="main">
          <section class="jumbotron text-center" id="presentation">
            <div class="container">
              <h1 class="jumbotron-heading">Aluguel de Imóveis</h1>
              <p class="lead">Encontre imóveis aqui!</p>
              <p>
                <a class="btn btn-primary my-2">Alugar</a>
                <a href="/cadastrar" class="btn btn-secondary my-2">Cadastrar Imóvel</a>
              </p>
            </div>
          </section>

          <div class="album py-5">
            <div class="container">
              <div class="row">
                    <div v-for="imovel in $root.imoveis" :key="imovel.id" class="col-md-4">
                      <div class="card mb-4 box-shadow">
                        <img class="card-img-top" style="height: '225px'; width: '100%'; display: 'block'" :src="imovel.fotos[0]" alt="Imagem da casa" data-holder-rendered="true" />


                        <div class="card-body">
                          <p class="card-text">{{ imovel.descricao }}</p>
                          <p class="card-text">Tipo: {{ imovel.tipo }}</p>
                          <p class="card-text">Quartos: {{ imovel.quartos }}</p>
                          <p class="card-text">Suites: {{ imovel.suites }}</p>
                          <p class="card-text">Vagas: {{ imovel.vagas }}</p>
                          <p class="card-text">Banheiros: {{ imovel.banheiros }}</p>
                          <p class="card-text">Valor total: {{ imovel.valor + imovel.iptu }}</p>
                          <p class="card-text">Cidade: {{ imovel.cidade }} <br> Bairro: {{ imovel.bairro }} <br> CEP: {{ imovel.cep }}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button class="btn btn-sm btn-outline-secondary">Alugar</button>
                              <!--button type="button" class="btn btn-sm btn-outline-secondary" @click="remover(imovel._id, $event)">Remover</button-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

export default {
  name: 'hello',
  methods: {
    detlhesImovel (event) {
    },
    remover (imovelId, evento) {
      console.log(imovelId)
      console.log(evento)
      fetch('/api/imoveis/' + imovelId, {mode: 'no-cors'})
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
    }
  },
  created: function () {
    fetch('/api/imoveis', {mode: 'no-cors'})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this)
        this.$root.imoveis = responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}


/* aluguel */
:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(var(--jumbotron-padding-y) * 2);
    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

/* New */

.card-img-top{
  height: 220px;
}
#presentation{
  color: white;
  background-image:  
 -webkit-image-set(
    url("https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_medium.jpg") 1x,
    url("https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_large.jpg") 2x
  ) ;
  background-size: cover;
}

.jumbotron{
  border-radius: 0 !important;
}

</style>
