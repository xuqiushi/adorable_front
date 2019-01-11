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
    <!--key属性在v-for的时候必须定义，有助于提高渲染速度-->
    <div
      v-for="(x, y) in testList"
      :key="x+y"
    />
    <!--v-for 不要与v-if混用，会增加遍历次数，此时将testList用computed属性替代即可-->
    <div
      v-for="(x, y) in testList"
      v-if="x === 1"
      :key="x+y"
    >
      错误
    </div>
    <!--正确的做法是直接将筛选写成computed属性-->
    <div
      v-for="(x, y) in testListComputed"
      :key="x+y"
    >
      正确
    </div>
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
      componentProp: '',
      testList: [1, 2, 3]
    }
  },
  computed: {
    testListComputed: function() {
      //变量定义的时候使用let与const，不要使用var，var会将变量暴漏到全局
      let returnList = []
      for (let i = 1; i < this.testList.length; i++) {
        if (i === 1) {
          returnList.push()
        }
      }
      return this.testList
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
