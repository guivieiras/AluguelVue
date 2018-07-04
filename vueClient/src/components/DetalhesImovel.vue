<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-md-6">
                <img :src="casa.fotos[0]">
            </div>
            <div class="col-md-6">
                <span>Descrição: {{casa.descricao}}</span>
                <span>Quartos: {{casa.quartos}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  props: {
    casa: {
      type: Object,
      required: true
    }
  }
}
</script>