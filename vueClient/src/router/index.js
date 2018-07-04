import Vue from 'vue'
import Router from 'vue-router'
import ListarImoveis from '@/components/ListarImoveis'
import CadastrarImovel from '@/components/CadastrarImovel'
import DetalhesImovel from '@/components/DetalhesImovel'

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
    },
    {
      path: '/detalhesImovel/:id',
      name: 'Detalhes Imóvel',
      component: DetalhesImovel,
      props: true
    }
  ],
  mode: 'history'
})
