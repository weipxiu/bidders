<template>
  <div id="app">
    <ul class="nav">
      <li>
        <el-row>
          <router-link to='/' tag="el-button" type="button" class="el-button--primary" exact event='click'>Home</router-link>
        </el-row>
      </li>
      <li>
        <el-row>
          <router-link to='/login' tag="el-button" type="button" class="el-button--primary" event='click'>Login</router-link>
        </el-row>
      </li>
    </ul>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul.nav li {
  display: inline-block;
  margin: 0 10px;
}
</style>
