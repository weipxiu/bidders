<template>
  <div class="hello">
    <el-container>
      <!-- 正文 -->
      <el-main>
        <div class="content">
          <div class="nav">
            <el-row type="flex" justify="space-between" class="row-bg">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <el-menu class="el-menu-demo" mode="horizontal" background-color="#EDEDED" text-color="#8D8D8D">
                    <el-menu-item index="1">正在拍卖</el-menu-item>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#777">
                    <el-menu-item index="1">综合排序</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">时间</template>
                      <el-menu-item index="2-1" @click="LowToHight('begindate')">从小到大</el-menu-item>
                      <el-menu-item index="2-2" @click="hightToLow('begindate')">从大到小</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">价格</template>
                      <el-menu-item index="3-1" @click="LowToHight('nowprice')">从低到高</el-menu-item>
                      <el-menu-item index="3-2" @click="hightToLow('nowprice')">从高到底</el-menu-item>
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
              <el-col :span="6" v-for="(item,index) in commoditylist" :key="index">
                <div class="grid-content bg-purple" @click="onClickList(item.goodssn)">
                  <img class="comImg" :src="item.imgs[0]" alt="">
                  <p class="title">{{item.goodstitle}}</p>
                  <div class="parameter">
                    <el-row>
                      <el-col :span="5">当前价</el-col>
                      <el-col :span="19">
                        <span class="price">{{item.nowprice}}元</span>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">起拍价</el-col>
                      <el-col :span="19">{{item.floorprice}}元</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">
                        <span class="tiemEnd">{{item.enddate}}</span> 结束</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5">参与数</el-col>
                      <el-col :span="10">{{item.number}}人报名</el-col>
                      <el-col :span="9">
                        <el-button size="mini" type="success" round v-if="item.goodstatus == '即将开始'">即将开始</el-button>
                        <el-button size="mini" type="danger" round v-else-if="item.goodstatus == '正在进行'">正在进行</el-button>
                        <el-button size="mini" type="info" round v-else-if="item.goodstatus == '已结束'">已结束</el-button>
                        <el-button size="mini" type="warning" round v-else-if="item.goodstatus == '未开始'">未开始</el-button>
                        <el-button size="mini" type="info" round v-else-if="item.goodstatus == '已下架'">已下架</el-button>
                        <el-button size="mini" type="primary" round v-else>竞拍中</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="commoditylist.length" :page-size="5">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import screen from '@/assets/js'


export default {
  data() {
    return {
      commoditylist:[],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    onClickList(id){
      console.log(id);
      this.$router.push({ path: '/Details', query: { goodsSn: id } })
    },
    LowToHight(key){
      console.log(key)
      this.commoditylist.sort(screen.currentPrice(key))
    },
    hightToLow(key){
      console.log(key)
      this.commoditylist.sort(screen.currentPrice(key)).reverse()
    }
  },
  created: function () {

    axios.get('/songhengstore/goods/getgoods', {
      params: {
        // id: 3884108
      }
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // }
    }).then(res => {
      console.log(res.data.data)
      this.commoditylist = res.data.data
    }).catch(err => {
      console.log('加载失败')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content .nav {
  background: #EDEDED;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}
.content {
  width: 1200px;
  margin: 0 auto;
}

/*商品列表*/
.comList {
  width: 100%;
  margin: 20px auto;
}
.nav >>> .el-submenu__title i {
  color: #8D8D8D;
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
  color: #66b1ff;
  font-size: 20px;
}
.comList .tiemEnd {
  font-weight: bold;
  color: #333;
  font-size: 16px;
}
</style>
