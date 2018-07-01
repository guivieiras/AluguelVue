<template>
<div id="lista" role="main">
          <section class="jumbotron text-center" id="presentation">
            <div class="container">
              <h1 class="jumbotron-heading">Aluguel de Imóveis</h1>
              <p class="lead">Encontre imóveis aqui!</p>
              <p>
                <a class="btn btn-primary my-2">Alugar</a>
                <a class="btn btn-secondary my-2">Sobre</a>
              </p>
            </div>
          </section>

          <div class="album py-5">
            <div class="container">
              <div class="row">
                    <div v-for="casa in $root.casas" :key="casa.id" class="col-md-4">
                      <div class="card mb-4 box-shadow">
                        <img class="card-img-top" style="height: '225px'; width: '100%'; display: 'block'" :src="casa.urlImagem" alt="Imagem da casa" data-holder-rendered="true" />


                        <div class="card-body">
                          <p class="card-text">{{ casa.descricao }}</p>
                          <p class="card-text">Cor: {{ casa.cor }}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button class="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <div class="text-muted">9 mins</div>
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
    run () {}
  },
  created: function () {
    fetch('http://localhost:5000/api/casas')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this)
        this.$root.casas = responseJson
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
