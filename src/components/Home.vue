<template>
  <div class="hello">
    <el-container>
      <el-header class="sh_header">
        <div class="sh_header_centent">
          <el-row type="flex" justify="space-between" class="row-bg">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <a href=""><img src="@/assets/images/logo.png" width="245" height="60" alt=""></a>
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
              <el-col :span="8">
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
            <el-row :gutter="20" type="" class="row-bg" justify="space-between">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" alt="">
                  <p class="title">一个用旧了的苹果mac pro笔记本就问你想要吗</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">
                        <span class="price">450元</span>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">300元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">
                        <span class="tiemEnd">7月21日 10:00</span> 结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="10">11人报名</el-col>
                      <el-col :span="9">
                        <el-button size="mini" type="danger" round>正在进行</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" alt="">
                  <p class="title">一个用旧了的苹果mac pro笔记本就问你想要吗</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">450元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">300元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">7月21日 10:00结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="19">11人报名</el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" alt="">
                  <p class="title">一个用旧了的苹果mac pro笔记本就问你想要吗</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">450元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">300元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">7月21日 10:00结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="19">11人报名</el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" alt="">
                  <p class="title">一个用旧了的苹果mac pro笔记本就问你想要吗</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">450元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">300元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">7月21日 10:00结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="19">11人报名</el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" alt="">
                  <p class="title">一个用旧了的苹果mac pro笔记本就问你想要吗</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">450元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">300元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">7月21日 10:00结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="19">11人报名</el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="50" :page-size="10">
          </el-pagination>
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
  background: #BB0000;
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
.comList {
  width: 100%;
  margin: 20px auto;
}
.comImg {
  width: 100%;
  height: 178px;
}
.comList .title {
  height: 32px;
  line-height: 32px;
  text-indent: 15px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid #eee;
}
.comList .grid-content {
  border: 1px solid #eee;
}
.comList .grid-content {
  margin-bottom: 20px;
}
.comList .grid-content .el-row .el-col {
  font-size: 14px;
  color: #666;
  text-indent: 15px;
  height: 28px;
  line-height: 28px;
}
.comList .grid-content .parameter {
  padding: 15px 0;
}
.comList .price {
  color: #f44b50;
  font-size: 20px;
  font-weight: bold;
}
.comList .tiemEnd {
  font-weight: bold;
  color: #333;
  font-size: 16px;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 400;
    display: inherit;
    text-align: center;
    margin:30px auto 50px
}
</style>
