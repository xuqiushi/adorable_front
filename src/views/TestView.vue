<!-- @format -->

<template>
  <div>
    <!--html tag写成短横线连接的形式-->
    <!--这种self-close格式的tag直接能用于vue后缀文件的template下，否则浏览器认为你故意不想要这个标签-->
    <!--我们的组件prop务必使用短横线连接-->
    <test-component :root-data="componentProp" />
    <div
      :bind="componentProp"
      @click="testMethod()"
    />
  </div>

</template>
<script>
import TestComponent from '../components/TestComponent'
export default {
  name: 'TestView',
  component: {
    TestComponent: TestComponent
  },
  data() {
    return {
      //变量名字用小驼峰
      componentProp: ''
    }
  },
  methods: {
    //函数名用小驼峰
    testMethod() {
      window.location = 'test'
    }
  }
}
</script>

<style scoped>
/*务必要有scoped标签，这能够保证这里的style只在本vue组件中生效*/
</style>
