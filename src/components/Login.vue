<template>
  <div class="hello">
    <el-container>

      <div class="centent_body">
        <div class="login">
          <p>请登录</p>
          <a href="http://gxoa.021.com/">
            <el-button type="primary" size="small">钉钉登录</el-button>
          </a>
        </div>
      </div>

    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import screen from '@/assets/js'
import Config from '@/config'
import { Loading } from 'element-ui';

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created: function () {
    // 关闭loading
    let loadingInstance = Loading.service();
    // 以服务的方式调用的 Loading 需要异步关闭
    this.$nextTick(() => {
      loadingInstance.close();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centent_body {
  width: 1200px;
  min-height:500px;
  margin: 0 auto;
  position: relative;
}
.login {
  text-align: center;
  width: 150px;
  height:150px;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto
}
.login p {
  margin: 10px auto;
}
</style>
