<template>
  <div class="hello">
    <el-container>
      <!-- 正文 -->
      <el-main>
        <div class="content">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>详情页</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 商品详情 -->
          <div class="detaList">
            <el-row>
              <el-col :span="12">
                <div class="title">{{goodsDetail.goodsTitle}}</div>
                <!-- <img :src="goodsDetail.imgs[0]" width="592" height="357" alt=""> -->
                <div class="listImgs">
                  <img :src="item" width="106" height="72" alt="" v-for="(item,index) in goodsDetail.imgs" :key="index">
                </div>
              </el-col>
              <el-col :span="12" class="dt_parame">
                <el-row>
                  <el-col :span="3">当前价：</el-col>
                  <el-col :span="21">
                    <span class="price">{{goodsDetail.nowPrice}}元</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">起拍价：</el-col>
                  <el-col :span="21">{{goodsDetail.floorPrice}}元</el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">距结束：</el-col>
                  <el-col :span="21">{{CountDown}}</el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">加价：</el-col>
                  <el-col :span="21">
                    <el-radio-group v-model="radio1" size="small">
                      <el-radio-button label="item" v-for="(item,index) in goodsDetail.addMoney" :key="index">{{item+'元'}}</el-radio-button>
                    </el-radio-group>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-button type="primary" round size="small" class="btn" v-if="goodsDetail.status == '1'">参与竞价</el-button>
                    <el-button type="success" round size="small" class="btn" v-else-if="goodsDetail.status == '3'">即将开始</el-button>
                    <el-button type="info" round size="small" class="btn" v-else>已结束</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <div class="details_text">
              <p>
                {{goodsDetail.goodsDesc}}
              </p>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      radio1: '100元',
      goodsDetail: [],
      CountDown: 0
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created: function () {
    console.log('详情页', this.$route.query.goodsSn)
    var id = this.$route.query.goodsSn;
    axios.get('/songhengstore/goods/goodsDetail', {
      params: {
        goodsSn: id
      }
    }).then(res => {
      console.log('详情页数据', res.data.data)
      this.goodsDetail = res.data.data

      // 倒计时
      if (countDown > 0) {
        var countDown = this.goodsDetail.endDate - Date.parse(new Date());
        var s = countDown / 1000;   //需要转的秒数
        var m;
        setInterval(() => {
          m = secondToDate(s)
          s--;
          this.CountDown = m
        }, 1000);
        // 输出03天05分59秒  时分秒
        function secondToDate(result) {
          var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
          var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
          var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
          return result = h + "时" + m + "分" + s + "秒"
        }
      }

    }).catch(err => {
      console.log('加载失败')
    })
  },
  computed: {
    // 计算属性的 getter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detaList {
  width: 1180px;
  margin: 20px auto;
  min-height: 500px;
  border: 1px solid #eee;
  padding: 15px;
}
.detaList .title {
  font-size: 22px;
  color: #555;
  margin-bottom: 15px;
}
.listImgs {
  margin-top: 15px;
}
.listImgs img {
  margin-right: 15px;
}
.listImgs img:last-of-type {
  margin-right: 0;
}
.details_text {
  color: #888;
  font-size: 14px;
  line-height: 26px;
  margin: 20px 0;
}
.details_text p {
  text-indent: 2em;
  margin: 10px 0;
}
.dt_parame {
  padding: 100px 0 0 35px;
}
.dt_parame .el-col {
  font-size: 16px;
  color: #333;
  height: 50px;
}
.dt_parame .el-col .btn {
  margin: 30px auto 0;
  padding: 10px 40px;
}
</style>
