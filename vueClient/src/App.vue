<template>
  <div id="app">

  <!-- Bootstrap core CSS -->
  <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="album.css" rel="stylesheet">



    <header>
      <span>Aluguel de Imóveis</span>
    </header>
    <main class="bg-light">
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// let ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', '//cdn.ckeditor.com/4.6.2/full/ckeditor.js')
// document.head.appendChild(ckeditor)

// ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.slim.min.js')
// document.head.appendChild(ckeditor)

// ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', 'https://getbootstrap.com/docs/4.0/assets/js/vendor/jquery-slim.min.js')
// document.head.appendChild(ckeditor)

// ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', 'https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js')
// document.head.appendChild(ckeditor)

// ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', 'https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js')
// document.head.appendChild(ckeditor)

// ckeditor = document.createElement('script')
// ckeditor.setAttribute('src', 'https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js')
// document.head.appendChild(ckeditor)
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* main {
   text-align: center;
   margin-top: 40px;
 }*/

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
