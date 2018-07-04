<template>
    <div class="container p-5">
<form action="../api/imoveis/cadastrar" method="POST" enctype="multipart/form-data" id="formCadastro">
  <FormInput label="Quartos" type="number" id="quartos"/>
  <FormInput label="Suites" type="number" id="suites"/>
  <FormInput label="Vagas" type="number" id="vagas"/>
  <FormInput label="Descrição" type="textarea" id="descricao" formId="formCadastro"/>
  <FormInput label="Área total" type="number" id="area_total" small="(m²)"/>
  <FormInput label="Banheiros" type="number" id="banheiros"/>
  <FormInput label="Valor" type="number" id="valor"/> 
  <FormInput label="IPTU" type="number" id="iptu"/> 
  <FormInput label="Mobiliado" type="checkbox" id="mobiliado"/>
  <FormInput label="Cidade" type="text" id="cidade"/>
  <FormInput label="Bairro" type="text" id="bairro"/>
  <FormInput label="Tipo" type="select" id="tipo" :checkBoxItems="['Apartamento','Casa','Kitnet']"/>
  <FormInput label="Número" type="text" id="numero"/>
  <FormInput label="Complemento" type="text" id="complemento"/>
  <FormInput label="Fotos" type="file" id="fotos"/>  
  <FormInput label="CEP" type="text" id="cep"/>  
  
  <button type="submit" class="btn btn-primary">Cadastrar</button>
</form>    </div>
</template>
<script>
import FormInput from './FormInput.vue'
import Inputmask from 'inputmask'

export default {
  components: {
    FormInput: FormInput
  },
  mounted () {
    Inputmask('9999-999').mask(document.getElementById('cep'))
  }
}
</script>
