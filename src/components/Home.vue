<template>
  <div class="hello">
    <el-container>
      <el-header class="sh_header">
        <div class="sh_header_centent">
          <el-row type="flex" justify="space-between" class="row-bg">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <a href=""><img src="http://mini.eastday.com/indexStatic/image/new_logo.png?20180718171754" height="60" alt=""></a>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light">个人中心</div>
            </el-col>
          </el-row>
        </div>
      </el-header>

      <!-- 正文 -->
      <el-main>
        <div class="content">
          <div class="nav">
            <el-row type="flex" justify="space-between" class="row-bg">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">正在拍卖</el-menu-item>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">综合排序</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">时间</template>
                      <el-menu-item index="2-1">选项1</el-menu-item>
                      <el-menu-item index="2-2">选项2</el-menu-item>
                      <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">价格</template>
                      <el-menu-item index="3-1">选项1</el-menu-item>
                      <el-menu-item index="3-2">选项2</el-menu-item>
                      <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                      <template slot="title">拍卖状态</template>
                      <el-menu-item index="4-1">选项1</el-menu-item>
                      <el-menu-item index="4-2">选项2</el-menu-item>
                      <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-submenu>
                  </el-menu>
                </div>
              </el-col>
            </el-row>
          </div>

          <!-- 商品列表 -->
          <div class="comList">

          </div>
        </div>
      </el-main>

      <!-- 底部 -->
      <el-footer>
        <div class="sh_footer">
          嵩恒网络科技有限公司拍卖系统
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sh_header {
  background: #f44b50;
}
.sh_header_centent {
  width: 1200px;
  margin: 0 auto;
}
.nav {
  background: #545c64;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.sh_footer {
  width: 1200px;
  margin: 0 auto;
}
.el-footer {
  background: #3a3a3a;
  font-size: 16px;
  line-height: 60px;
  color: #fff;
  text-align: center;
}
/*商品列表*/
.comList{
  width:100%;
  margin:0 auto;
}
</style>
