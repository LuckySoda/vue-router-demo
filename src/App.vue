<template>
  <div id="app">
    <ul>
        <li><router-link :to="{name:'home'}" activeClass='home'>home</router-link></li>
        <li><router-link to='/doc' activeClass='doc'>doc</router-link></li>
        <li><router-link to='/about' exact>about</router-link></li>
        <li><router-link to='/user'>user</router-link></li>
    </ul>
    <router-view name='left'></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  ul>li{
    list-style:none;
    width:100px;
    height:100px;
    display:inline-block;
    line-height:100px;
    text-align:center;
  }
  ul li a{
    text-decoration:none;
    color:black;
  }
  .active-link{
    color:red;
  }
  .home{
    color:fuchsia;
  }
  .doc{
    color:rgb(43, 15, 204);
  }
</style>
