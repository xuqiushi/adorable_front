<!-- @format -->

<template>
  <div 
    v-for = "a in test_data" 
    class="test_attr"
  />
</template>
<script>
export default {
  name: 'InputVariantForm',
  data() {
    return {
      test_data: {
        name: 'test1',
        job: 'test_lint'
      }
    }
  },
  methods: {
    test_function() {
      console.log('test_log')
    }
  }
}
</script>
