<template>
  <div id="app">
    <Header></Header>
    <!-- <ul class="nav">
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
    </ul> -->
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import router from './router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
/*公共样式*/
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
#app {
  min-height: 100%;
  position: relative;
}
.el-container {
  padding-bottom: 100px;
}
.sh_center {
  text-align: center;
  text-indent: 0 !important;
}
.sh_header {
  background: #bb0000;
}
.sh_header_centent {
  width: 1200px;
  margin: 0 auto;
}
.content .nav {
  background: #545c64;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.sh_footer {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background: #3a3a3a url('assets/images/footerBg.png') repeat;
  position: absolute;
  bottom: 0;
}
.el-footer {
  font-size: 14px;
  line-height: 30px;
  color: #999;
  text-align: center;
  width: 1200px;
  margin: 0 auto;
}
.el-footer p{
  margin-top:13px
}
.el-menu-item,
.el-submenu__title,
.el-menu--horizontal > .el-submenu .el-submenu__title,
.el-menu--horizontal > .el-menu-item,
.el-submenu {
  height: 36px;
  line-height: 36px;
}
/*分页*/
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 400;
  display: inherit;
  text-align: center;
  margin: 30px auto 50px;
}
</style>
