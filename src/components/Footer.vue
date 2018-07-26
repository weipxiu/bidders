<template>
  <div class="sh_footer" v-if="true">
    <!-- 底部 -->
    <el-footer>
      <div class="">
        <p>嵩恒网络科技有限公司内部拍卖系统</p>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.sh_footer {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  /* background: #3a3a3a url("assets/images/footerBg.png") repeat; */
  background: #2e2e2e;
  position: absolute;
  bottom: 0;
  padding-top:22px;
  box-sizing: border-box;
}
.el-footer {
  font-size: 14px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  width: 1200px;
  margin: 0 auto;
  display: table;
}
</style>
