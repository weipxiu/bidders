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
  },
  created: function () {
    if (window.console && window.console.log) {
      setTimeout(function () {
        console.log("\n %c 嵩恒网络科技有限公司拍卖系统 %c  © Jun Li  如有Bug - QQ：343049466 \n",
          "color:#FFFFFB;background:#1abc9c;padding:5px 0;border-radius:.5rem 0 0 .5rem;",
          "color:#FFFFFB;background:#080808;padding:5px 0;border-radius:0 .5rem .5rem 0;"
        );
      }, 1500);
    }
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
.sh_indent {
  text-indent: 0 !important;
}
.sh_center {
  text-align: center;
  text-indent: 0 !important;
}
.is-active,.el-submenu__title{
  color:#fff!important;
}
#app {
  min-height: 100%;
  position: relative;
}
.el-container {
  padding-bottom: 100px;
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
  margin: 50px auto;
}
</style>
