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
                <img :src="mainImg" width="592" height="357" alt="" v-if="mainImg">
                <img :src="goodsDetail.imgs[0]" width="592" height="357" alt="" v-if="!mainImg && goodsDetail.imgs">
                <!--双重判断，避免初始化控制台出现出现报错-->
                <div class="listImgs">
                  <img :src="item" width="106" height="72" alt="" v-for="(item,index) in goodsDetail.imgs" :key="index" @click="slectImg(item)">
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
                <el-row v-if="CountDown != 0">
                  <el-col :span="3">距结束：</el-col>
                  <el-col :span="21">{{CountDown}}</el-col>
                </el-row>
                <el-row v-else>
                  <el-col :span="3">距结束：</el-col>
                  <el-col :span="21">该商品拍卖已经结束</el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">加价：</el-col>
                  <el-col :span="21">
                    <el-radio-group v-model="radioData" size="small">
                      <el-radio-button 
                      :label="item" v-for="(item,index) in goodsDetail.addMoney" 
                      :key="index" 
                      :disabled="goodsDetail.status != '1'">{{item+'元'}}</el-radio-button>
                    </el-radio-group>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-button size="small" type="primary" round class="btn" v-if="goodsDetail.status == '1'" @click="dialogTab">参与竞价</el-button>
                    <el-button type="info" round size="small" class="btn" v-else-if="goodsDetail.status == '0'">已下架</el-button>
                    <el-button type="warning" round size="small" class="btn" v-else-if="goodsDetail.status == '3'">即将开始</el-button>
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
    <!-- 竞价弹窗 -->
    <el-dialog type='warning' :showClose="false" title="注意！由于参与竞拍人数过多，当前价格可能与页面显示价格不符！" :visible="dialogTableVisible" width="350px" center>
      <div class="pricePopup">
        <p>当前价格：{{goodsDetail.nowPrice}}元</p>
        <p>竞价价格：<span>{{Number(goodsDetail.nowPrice) + Number(radioData)}}元</span></p>
      </div>
      <el-button type="info" round size="small" class="btn_close" @click="dialogTableVisible = false">取消</el-button>
      <el-button type="primary" round size="small" class="btn_success" v-if="goodsDetail.status == '1'" @click="starBidPrice(goodsDetail.nowPrice)">参与竞价</el-button>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Config from '@/config'

export default {
  data() {
    return {
      radioData: '',  //加价默认初始值
      goodsDetail: [],  //列表数据
      CountDown: 0, //倒计时时间
      mainImg: '',  //大图
      dialogTableVisible: false
    }
  },
  methods: {
    //大图展示
    slectImg(src) {
      this.mainImg = src;
    },
    //开始竞价
    dialogTab() {
      if (!this.radioData) {
        this.$confirm('真抱歉，您还没有选择加价金额，竞价失败！', {
          type: 'error',
          center: true,
          showCancelButton: true,
          showConfirmButton: true
        });
        return
      } else {
        this.detaliData();
        this.dialogTableVisible = true
      }
    },
    starBidPrice(data) {
      axios.get(Config.bidPrice, {
        params: {
          goodsSn: this.$route.query.goodsSn,
          raiseMoney: this.radioData,
          nowPrice: data
        }
      }).then(res => {
        console.log(res.data.message)
        this.dialogTableVisible = false; //关闭弹窗
        this.detaliData();
      }).catch(err => {
        this.$confirm('真抱歉，出现异常，您当前竞价失败！', {
          type: 'error',
          center: true,
          showCancelButton: true,
          showConfirmButton: true
        });
      })
    },
    detaliData() {
      var id = this.$route.query.goodsSn;
      axios.get(Config.goodsDetail, {
        params: {
          goodsSn: id
        }
      }).then(res => {
        console.log('详情页数据', res.data.data)
        this.goodsDetail = res.data.data

        // 倒计时
        var countDown = this.goodsDetail.endDate - Date.parse(new Date());
        var s = countDown / 1000;   //需要转的秒数
        if (countDown > 0) {
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
    }
  },
  created: function () {
    this.detaliData();
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
  cursor: pointer;
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
/*商品弹窗*/
.pricePopup {
  width: 100%;
  margin: 0 0 25px;
}
.pricePopup p {
  font-size: 17px;
  height: 32px;
  line-height: 32px;
}
.pricePopup p span {
  color: #ee2e2e;
}
.el-dialog__body {
  padding-top: 0;
}
.btn_close {
  width: 100px;
  padding: 8px 15px;
}
.btn_success {
  width: 100px;
  padding: 8px 15px;
  float: right;
}
</style>
