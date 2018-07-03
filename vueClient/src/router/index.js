import Vue from 'vue'
import Router from 'vue-router'
import ListarImoveis from '@/components/ListarImoveis'
import CadastrarImovel from '@/components/CadastrarImovel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listar Imóveis',
      component: ListarImoveis
    },
    {
      path: '/cadastrar',
      name: 'Cadastrar Imóvel',
      component: CadastrarImovel
    }
  ],
  mode: 'history'
})
