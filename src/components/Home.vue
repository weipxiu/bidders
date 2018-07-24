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
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#777">
                    <el-menu-item index="1" @click="handleSelect">正在拍卖</el-menu-item>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#EDEDED" text-color="#8D8D8D" active-text-color="#777">
                    <el-menu-item index="1" @click="handleSelect">综合排序</el-menu-item>
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
                      <el-menu-item index="4-1" @click="auctionStatus('未开始')">未开始</el-menu-item>
                      <el-menu-item index="4-2" @click="auctionStatus('竞拍中')">竞拍中</el-menu-item>
                      <el-menu-item index="4-3" @click="auctionStatus('已结束')">已结束</el-menu-item>
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
                    <el-row v-if="item.enddate != 0">
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">
                        <span class="tiemEnd">{{item.enddate}}</span> 结束</el-col>
                    </el-row>
                    <el-row v-else>
                      <el-col :span="5">预 计</el-col>
                      <el-col :span="19">
                        <span class="tiemEnd">当前竞拍已经结束</span></el-col>
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
          <el-pagination background layout="prev, pager, next" :total="commoditylist.length" :page-size="50">
          </el-pagination>
        </div>
      </el-main>
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
      commoditylist: [],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    inliListData() {
      return new Promise((resolve, reject) => {
        Loading.service();
        axios.get(Config.getgoodsList, {
          params: {
            // id: 3884108
          }
          // headers: {
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // }
        }).then(res => {
          // 关闭loading
          let loadingInstance = Loading.service();
          // 以服务的方式调用的 Loading 需要异步关闭
          this.$nextTick(() => {
            loadingInstance.close();
          });
          console.log(res.data.data)

          this.commoditylist = res.data.data
          for (var i = 0; i < res.data.data.length; i++) {
            // 倒计时
            var countDown =  this.commoditylist[i].enddate - Date.parse(new Date());
            var s = countDown / 1000;   //需要转的秒数
            if (countDown > 0) {
              var m;
              this.commoditylist[i].enddate = secondToDate(s)
              // 输出03天05分59秒  时分秒
              function secondToDate(result) {
                var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
                var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
                var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
                return result = h + "时" + m + "分" + s + "秒"
              }
            }else{
              this.commoditylist[i].enddate = '0'
            }
          }

          resolve(res.data.data)
        }).catch(err => {
          console.log('加载失败')
        })
      })
    },
    //正在拍卖/综合排序
    handleSelect() {
      this.inliListData()
    },
    onClickList(id) {
      this.inliListData().then(() => {
        this.$router.push({ path: '/Details', query: { goodsSn: id } })
      })
    },
    LowToHight(key) {
      this.inliListData().then(() => {
        this.commoditylist.sort(screen.currentPrice(key))
      })
    },
    hightToLow(key) {
      this.inliListData().then(() => {
        this.commoditylist.sort(screen.currentPrice(key)).reverse()
      })
    },
    //拍卖状态筛选
    auctionStatus(key) {
      this.inliListData().then(() => {
        this.commoditylist = this.commoditylist.filter(function (item) {
          return key == item.goodstatus
        })
      })
    }
  },
  created: function () {
    //初始化请求数据
    this.inliListData()
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
  color: #8d8d8d;
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
  margin-bottom: 20px;
  cursor: pointer;
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
  font-size: 18px;
}
.comList .tiemEnd {
  font-weight: bold;
  color: #333;
  font-size: 15px;
}
</style>
