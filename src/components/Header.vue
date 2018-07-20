<template>
  <div>
    <el-header class="sh_header">
      <div class="sh_header_centent">
        <el-row type="flex" justify="space-between" class="row-bg">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <a href="">
                <img src="@/assets/images/logo.png" width="166" height="40" alt="" class="logo">
                <img src="@/assets/images/logo_1.png" width="72" height="54" alt="" class="logo_1">
              </a>
            </div>
          </el-col>
          <el-col :span="4" class="sh_grid">
            <div class="grid-content bg-purple-light">
              <img src="https://avatars3.githubusercontent.com/u/24957370?s=460&v=4" alt="" width="50" height="50" class="portrait">
              <el-dropdown>
                <el-button type="primary">
                  个人中心
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" class="personal">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
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
.sh_center {
  text-align: center;
  text-indent: 0 !important;
}
.sh_header {
  background-color: #0098e4;
}
.sh_header_centent {
  width: 1200px;
  margin: 0 auto;
}
.sh_header_centent .grid-content,
.sh_header_centent .grid-content a {
  display: block;
  height: 100%;
}
.logo {
  vertical-align: baseline;
  margin-top: -5px;
  display: inline-block;
}
.logo_1 {
  vertical-align: bottom;
  margin-top: 5px;
  display: inline-block;
}
.portrait {
  border-radius: 100%;
  display: inline-block;
  margin-top: 4px;
}
.el-dropdown{
  vertical-align: top;
  display: inline-block;
  margin:10px 0 0 15px;
}
.el-button--primary{
  background: transparent;
  border:none;
  padding:12px 0
}
.sh_grid .grid-content{
  text-align: right
}
</style>
