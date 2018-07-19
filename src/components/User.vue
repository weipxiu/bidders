<template>
  <div class="hello">
    <el-container>
      <!-- 正文 -->
      <el-main>
        <div class="content">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="nav">
            <el-row type="flex" justify="space-between" class="row-bg">
              <el-col :span="15">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">全部订单</el-menu-item>
                    <el-menu-item index="2">进行中</el-menu-item>
                    <el-menu-item index="3">已完成</el-menu-item>
                    <el-menu-item index="4">竞价失败</el-menu-item>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="6">
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
                  </el-menu>
                </div>
              </el-col>
            </el-row>
          </div>

          <!-- 全部订单列表 -->
          <div class="allList">
            <el-row class="el_row_header">
              <el-col :span="3">
                <div class="grid-content bg-purple">2017-07-17</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">订单号：123456789</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">起拍价</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple">竞价价格</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple sh_center">记录</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple sh_center">订单状态</div>
              </el-col>
              <el-col :span="1">
                <div class="grid-content bg-purple sh_center">
                  <i class="el-icon-delete"></i>
                </div>
              </el-col>
            </el-row>

            <div>
              <el-row class="el_row_body">
                <el-col :span="3">
                  <div class="grid-content bg-purple">
                    <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" width="68" height="68" alt="">
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" style="text-indent:0">ipad air9成新银灰色 ipad air9成新银灰色 ipad air9成新银灰</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple">3500元</div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">4500元</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="" round  @click="open">查看竞价记录</el-button>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="primary" round>进行中</el-button>
                  </div>
                </el-col>
                <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row class="el_row_body">
                <el-col :span="3">
                  <div class="grid-content bg-purple">
                    <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" width="68" height="68" alt="">
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" style="text-indent:0">ipad air9成新银灰色 ipad air9成新银灰色 ipad air9成新银灰</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple">3500元</div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">4500元</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="" round  @click="open">查看竞价记录</el-button>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="primary" round>进行中</el-button>
                  </div>
                </el-col>
                <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
                </el-col>
              </el-row>
            </div>
          </div>

          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="50" :page-size="10">
          </el-pagination>
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      text:'我是一只修行千年的狐！千年修行千年孤独'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
      this.$alert(this.text, '竞价记录', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  margin: 30px auto;
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
/*全部商品列表*/
.allList {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #eee;
}
.el_row_header {
  background: #ebebeb;
  font-size: 14px;
  color: #666;
  height: 28px;
  line-height: 28px;
  text-indent: 20px;
}
.el_row_body {
  border-top: 1px solid #eee;
}
.el_row_body .el-col {
  display: table;
  height: 76px;
}
.el_row_body .grid-content {
  font-size: 14px;
  color: #666;
  line-height: 24px;
  text-indent: 20px;
  vertical-align: middle;
  display: table-cell;
}
.el-breadcrumb {
  margin-top: 10px;
}
</style>
