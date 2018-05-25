<template>
  <div>
    <span>我是{{name}}</span>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next){ //组件的钩子函数
    console.log(this) //此时this为undefined,因为vue实例还未生成,此时若想改变即将生成的vue实例的数据只能通过next方法里面添加回调函数来修改，VM是即将生成的vue对象
    next( vm =>{
      console.log(vm)
      vm.name = '123'
    })
  },
  beforeCreate(){
    console.log('bv')
  },
  data() {
    return {
      name: "home"
    };
  }
};
</script>