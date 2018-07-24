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

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centent_body {
  width: 1200px;
  margin: 0 auto;
}
.login{
  text-align: center;
  width:150px;
  margin:200px auto 0;
}
.login p{
  margin:10px auto;
}
</style>
