<template>
    <div v-if="type == 'checkbox'" class="form-check form-group">
    <input :name="id" type="checkbox" class="form-check-input" :id="id">
    <label class="form-check-label" :for="id">{{label}}</label>
  </div>

  <div v-else-if="type == 'file'" class="form-group">
    <label :for="id">{{label}}</label>
    <input :name="id" type="file" class="form-control-file" :id="id" multiple>
  </div>

<div v-else-if="type == 'select'" class="form-group">
      <label :for="id">{{label}}</label>
  <select class="form-control" :id="id" :name="id">
  <option v-for="item in checkBoxItems" :key="item">{{item}}</option>
</select>
</div>

<div v-else-if="type == 'textarea'" class="form-group">
    <label :for="id">{{label}}</label>
    <textarea :name="id" class="form-control" :id="id" rows="3"></textarea>
  </div>

 <div  v-else class="form-group">
    <label :for="id">{{label}}</label>
    <small v-if="small != null">{{small}}</small>
    <input :name="id" :type="type" class="form-control" :id="id" required>
  </div>
  
  
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    small: {
      type: String,
      required: false
    },
    formId: {
      type: String,
      required: false
    },
    checkBoxItems: {
      type: Array,
      required: false
    }

  }
}
</script>
