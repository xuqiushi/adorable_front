<!-- @format -->

<template>
  <div>test</div>
</template>
<script>
export default {
  name: 'TestComponent',
  prop: {
    //我们的prop中的变量遵循我们的变量小驼峰
    rootData: {
      default: '',
      type: String,
      required: true
    }
  },
  data() {
    return {
      testPara: ''
    }
  }
}
</script>

<style scoped>
</style>
