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
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#ee2e2e">
                    <el-menu-item index="1">全部订单</el-menu-item>
                    <el-menu-item index="2">进行中</el-menu-item>
                    <el-menu-item index="3">已完成</el-menu-item>
                    <el-menu-item index="4">竞价失败</el-menu-item>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#ee2e2e">
                    <el-menu-item index="1">综合排序</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">时间</template>
                      <el-menu-item index="2-1">从低到高</el-menu-item>
                      <el-menu-item index="2-2">从高到低</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">价格</template>
                      <el-menu-item index="3-1">从低到高</el-menu-item>
                      <el-menu-item index="3-2">从高到低</el-menu-item>
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
                <div class="grid-content bg-purple sh_indent">订单号：123456789</div>
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

            <div v-for="(item,index) in userDataList" :key="index">
              <el-row class="el_row_body">
                <el-col :span="3">
                  <div class="grid-content bg-purple">
                    <img class="comImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980189049&di=cd8f4dcc268877599adbf3cb7d8caa08&imgtype=0&src=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F3%2F00%2Fmacbook_pro_13_a_1143_0_0.jpg" width="68" height="68" alt="">
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple sh_indent">{{item.goods.goodsTitle}}</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple">{{item.goods.floorPrice}}元</div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">{{item.goods.nowPrice}}元</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="" round @click="dialogTableVisible = true">查看竞价记录</el-button>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="info" round v-if="item.orderStatus == 0">竞拍失败</el-button>
                    <el-button size="mini" type="success" round v-else-if="item.orderStatus == 1">交易成交</el-button>
                    <el-button size="mini" type="primary" round v-else>已发货</el-button>
                  </div>
                </el-col>
                <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="50" :page-size="50">
          </el-pagination>
        </div>
      </el-main>

    </el-container>

    <el-dialog title="pad air9成新银灰色 ipad air9成新银灰色 ipad air9成新银灰" :visible.sync="dialogTableVisible" width="610px" center>
      <p class="starTime">
        <i class="el-icon-time"></i> 开始时间：2018年7月20日</p>
      <el-table :data="gridData">
        <el-table-column property="date" label="时间" width="280"></el-table-column>
        <el-table-column property="name" label="竞价价格" width="280"></el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import axios from 'axios'
import screen from '@/assets/js'
import Config from '@/config'

export default {
  data() {
    return {
      userDataList:[], //数据列表
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      activeIndex: '1',
      activeIndex2: '1',
      gridData: [{
        date: '2016-05-02',
        name: '王小虎'
      }, {
        date: '2016-05-04',
        name: '王小虎'
      }, {
        date: '2016-05-01',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //拿到数据列表
    initListData(data) {
      axios.get(Config.userDataList, {
        params: {

        }
      }).then(res => {
        console.log(res.data.data)
        this.userDataList = res.data.data
      }).catch(err => {
        
      })
    }
  },
  created:function(){
    this.initListData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content .nav {
  background: #ededed;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  margin: 30px auto;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.nav >>> .el-submenu__title i {
  color: #8d8d8d;
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

.starTime {
  font-size: 16px;
  text-indent: 5px;
  margin-bottom: 10px;
}
</style>
