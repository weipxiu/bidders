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
              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#ee2e2e">
                    <el-menu-item index="1" @click="initListData">全部订单</el-menu-item>
                    <el-menu-item index="20" @click="personalStatus(3)">拍卖进行中</el-menu-item>
                    <el-menu-item index="30" @click="personalStatus(2)">已发货</el-menu-item>
                    <el-menu-item index="40" @click="personalStatus(1)">已完成</el-menu-item>
                    <el-menu-item index="50" @click="personalStatus(0)">竞价失败</el-menu-item>
                    <li style="width:450px;float: left;height: 36px;line-height: 36px;outline: none;"></li>
                    <el-menu-item index="10" @click="initListData">综合排序</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">时间</template>
                      <el-menu-item index="2-1" @click="initListData({sortTime:'asc'})">从低到高</el-menu-item>
                      <el-menu-item index="2-2" @click="initListData({sortTime:'desc'})">从高到低</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">价格</template>
                      <el-menu-item index="3-1" @click="initListData({sortPrice:'asc'})">从低到高</el-menu-item>
                      <el-menu-item index="3-2" @click="initListData({sortPrice:'desc'})">从高到低</el-menu-item>
                    </el-submenu>
                  </el-menu>
                </div>
              </el-col>
            </el-row>
          </div>

          <!-- 全部订单列表 -->
          <div class="allList" v-for="(item,index) in userDataList" :key="index" v-if="userDataList.length">
            <el-row class="el_row_header">
              <el-col :span="4">
                <div class="grid-content bg-purple">{{item.createTime}}</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple sh_indent">订单号：{{item.orderNo}}</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">起拍价</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">当前价格</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple sh_center">记录</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple sh_center"></div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple sh_center">订单状态</div>
              </el-col>
              <!-- <el-col :span="1">
                <div class="grid-content bg-purple sh_center">
                  <i class="el-icon-delete"></i>
                </div>
              </el-col> -->
            </el-row>

            <div>
              <el-row class="el_row_body">
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <img class="comImg" :src="item.goods.imgsList[0]" height="60" alt="">
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple sh_indent">{{item.goods.goodsTitle}}</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple">¥{{item.goods.floorPrice}}</div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple">¥{{item.goods.nowPrice}}</div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="" round @click="dialogTableVisible = true; seeRecord(item.goodsSn)">查看竞价记录</el-button>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="primary" round @click="priceIncrease(item.goodsSn)" :disabled="currentDate >= item.goods.endDate">前往加价</el-button>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple sh_center">
                    <el-button size="mini" type="info" round v-if="item.orderStatus == 0">竞拍失败</el-button>
                    <el-button size="mini" type="success" round v-else-if="item.orderStatus == 1">交易成交</el-button>
                    <el-button size="mini" type="success" round v-else-if="item.orderStatus == 2">已发货</el-button>
                    <el-button size="mini" type="primary" round v-else>拍卖进行中</el-button>
                  </div>
                </el-col>
                <!-- <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
                </el-col> -->
              </el-row>
            </div>
          </div>
          <p v-if="!userDataList.length" class="prompt">很遗憾，当前条件下没有任何订单！</p>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="userDataList.length" :page-size="100">
          </el-pagination>
        </div>
      </el-main>

    </el-container>

    <el-dialog title="" :visible.sync="dialogTableVisible" width="610px" center>
      <h2 style="font-size:22px; color:#555; text-align:center;margin: -20px auto 20px; font-weight:normal" v-if="gridData.length">{{gridData[0].goods.goodsTitle}}</h2>
      <p class="starTime" v-if="gridData.length">
        <i class="el-icon-time"></i> {{gridData[0].goods.beginDate}}</p>
      <img :src="gridData[0].goods.imgsList[0]" alt="" v-if="gridData.length" class="priceImg">
      <el-table :data="gridData">
        <el-table-column property="createTime" label="时间" width="280"></el-table-column>
        <el-table-column property="goodsMoney" label="竞价价格" width="280"></el-table-column>
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
      userDataList: [], //数据列表
      currentDate: '',//当前时间戳
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      activeIndex: '1',
      activeIndex2: '1',
      gridData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 前往加价
    priceIncrease(id) {
      this.$router.push({ path: '/Details', query: { goodsSn: id } })
    },
    //拿到数据列表
    initListData(data) {
      return new Promise((resolve, reject) => {
        axios.get(Config.userDataList, {
          params: {
            sortPrice: data ? data.sortPrice : '',
            sortTime: data ? data.sortTime : ''
          }
        }).then(res => {
          // 判断是否有权限
          if (res.data == 'No permissions') {
            this.$router.push({ path: '/login' });
            return
          }
          console.log(res.data.data)
      
          this.currentDate = Date.parse(new Date());;//当前时间戳
          this.userDataList = res.data.data;
          // 时间戳转时间
          for (var i = 0; i < this.userDataList.length; i++) {
            var time = this.userDataList[i].createTime;
            function getLocalTime(time) {
              var unixTimestamp = new Date(time)
              return unixTimestamp.toLocaleString()
            }
            this.userDataList[i].createTime = getLocalTime(time).split(' ')[0]
          }
          resolve(res.data.data)
        }).catch(err => {

        })
      })
    },
    // 当前订单所有竞价记录
    seeRecord(id) {
      axios.get(Config.getOrdersByGoodsSn, {
        params: {
          goodsSn: id
        }
      }).then(res => {
        console.log('当前订单所有竞价记录', res.data)
        // 判断是否有权限
        if (res.data == 'No permissions') {
          this.$router.push({ path: '/login' });
          return
        }
        this.gridData = res.data.data;
        // 时间戳转时间
        for (var i = 0; i < res.data.data.length; i++) {
          var timeCreateTime = this.gridData[i].createTime;
          var timeBeginDate = this.gridData[i].goods.beginDate;
          function getLocalTime(time) {
            var unixTimestamp = new Date(time)
            return unixTimestamp.toLocaleString()
          }
          this.gridData[i].createTime = getLocalTime(timeCreateTime) //拍卖竞价列表时间
           this.gridData[i].goods.beginDate = getLocalTime(timeBeginDate) //拍卖开始时间
        }
        console.log('当前订单所有竞价记录', this.gridData)
      }).catch(err => {

      })
    },
    //个人中心状态筛选
    personalStatus(key) {
      this.initListData().then(() => {
        this.userDataList = this.userDataList.filter(function (item) {
          return key == item.orderStatus
        })
      })
    }
  },
  created: function () {
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
.el_row_body .comImg {
  vertical-align: middle;
  max-width: 90px;
}
.starTime {
  font-size: 16px;
  text-indent: 5px;
  margin-bottom: 10px;
}
.priceImg{
  display: block;
  margin:0 auto;
  max-width: 100%;
}
p.prompt {
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 30px;
}
.content .el-button--primary.is-disabled {
  background-color: #909399;
  border-color: #909399;
  color: #fff;
}
</style>
