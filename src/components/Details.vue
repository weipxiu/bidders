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
                <img :src="mainImg" height="357" alt="" v-if="mainImg" class="masterGraph">
                <img :src="goodsDetail.imgs[0]" height="357" alt="" v-if="!mainImg && goodsDetail.imgs" class="masterGraph">
                <!--双重判断，避免初始化控制台出现出现报错-->
                <div class="listImgs">
                  <img :src="item" height="72" alt="" v-for="(item,index) in goodsDetail.imgs" :key="index" @click="slectImg(item)">
                </div>
              </el-col>
              <el-col :span="12" class="dt_parame">
                <el-row>
                  <el-col :span="6">当前价：</el-col>
                  <el-col :span="18">
                    <span class="price">{{goodsDetail.nowPrice}}元</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6">起拍价：</el-col>
                  <el-col :span="18">{{goodsDetail.floorPrice}}元</el-col>
                </el-row>
                <el-row v-if="goodsDetail.status == '3'">
                  <el-col :span="6">距开始：</el-col>
                  <el-col :span="18" class="CountDown" v-html="goodsDetail.beginDate"></el-col>
                </el-row>
                <el-row v-else-if="goodsDetail.status == '2'">
                  <el-col :span="6">距结束：</el-col>
                  <el-col :span="18">该商品拍卖已经结束</el-col>
                </el-row>
                <el-row v-else>
                  <el-col :span="6">距结束：</el-col>
                  <el-col :span="18" class="CountDown" v-html="goodsDetail.endDate"></el-col>
                </el-row>
                <el-row>
                  <el-col :span="6">加价：</el-col>
                  <el-col :span="18">
                    <el-radio-group v-model="radioData" size="small">
                      <el-radio-button :label="item" v-for="(item,index) in goodsDetail.addMoney" :key="index" :disabled="goodsDetail.status != '1'">{{item+'元'}}</el-radio-button>
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
              <p v-html="goodsDetail.goodsDesc">
              </p>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <!-- 竞价弹窗 -->
    <el-dialog class="el-dialog-padding" type='warning' :showClose="false" title="注意！由于参与竞拍人数过多，当前价格可能与页面显示价格不符！" :visible="dialogTableVisible" width="350px" left>
      <div class="pricePopup">
        <p>当前价格：
          <span>¥{{goodsDetail.nowPrice}}</span>
        </p>
        <p>竞价价格：
          <span>¥{{Number(goodsDetail.nowPrice) + Number(radioData)}}</span>
        </p>
        <span>{{intervalTime}}s</span>
      </div>
      <el-button type="info" round size="small" class="btn_close" @click="clickCancel">取消</el-button>
      <el-button type="primary" round size="small" class="btn_success" v-if="goodsDetail.status == '1'" @click="starBidPrice(goodsDetail.nowPrice)">确认竞价</el-button>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Config from '@/config'
var Timer = null;
export default {
  data() {
    return {
      radioData: '',  //加价默认初始值
      goodsDetail: [],  //列表数据
      CountDown: 0, //倒计时时间
      mainImg: '',  //大图
      dialogTableVisible: false,
      intervalTime: 5 //商品加价倒计时
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
        this.dialogTableVisible = true;
        // 商品加价倒计时

        clearInterval(Timer)
        this.intervalTime = 5
        Timer = setInterval(() => {
          this.intervalTime--
          if (this.intervalTime == 0) {
            console.log('倒计时时间', this.intervalTime)
            location.reload();
          }
        }, 1000)
      }
    },
    //参与竞价
    starBidPrice(data) {
      axios.get(Config.bidPrice, {
        params: {
          goodsSn: this.$route.query.goodsSn,
          raiseMoney: this.radioData,
          nowPrice: data
        }
      }).then(res => {
        console.log(res.data.message)
        clearInterval(Timer)//清除定时器
        // 判断是否有权限
        if (res.data == 'No permissions') {
          this.$router.push({ path: '/login' });
          return
        }
        if (res.data.status == 1) {
          this.$confirm('出价成功，请在个人中心查看订单', {
            type: 'success ',
            center: true,
            showCancelButton: true,
            showConfirmButton: true
          });
        } else {
          this.$confirm('出价失败', {
            type: 'success ',
            center: true,
            showCancelButton: true,
            showConfirmButton: true
          });
        }
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
    //取消弹窗
    clickCancel() {
      this.dialogTableVisible = false;
      clearInterval(Timer)//清除定时器
    },
    detaliData() {
      var id = this.$route.query.goodsSn;
      axios.get(Config.goodsDetail, {
        params: {
          goodsSn: id
        }
      }).then(res => {
        console.log('详情页数据', res.data.data)

        // 判断是否有权限
        if (res.data == 'No permissions') {
          this.$router.push({ path: '/login' });
          return
        }

        // 倒计时
        // var countDown = this.goodsDetail.endDate - Date.parse(new Date());
        // var s = countDown / 1000;   //需要转的秒数
        // if (countDown > 0) {
        //   var m;
        //   setInterval(() => {
        //     m = secondToDate(s)
        //     s--;
        //     this.CountDown = m
        //   }, 1000);
        //   // 输出03天05分59秒  时分秒
        //   function secondToDate(result) {
        //     var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
        //     var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
        //     var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
        //     return result = h + "时" + m + "分" + s + "秒"
        //   }
        // }
        var Time = null;
        var currentTimeStart = parseInt(res.data.data.beginDate - Date.parse(new Date())); //开始时间
        var currentTime = parseInt(res.data.data.endDate - Date.parse(new Date())); //结束时间

        // 输出03天05分59秒  时分秒
        function formatDuring(mss) {
          var days = parseInt(mss / (1000 * 60 * 60 * 24));
          var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = (mss % (1000 * 60)) / 1000;
          return days + "<span>天 </span>" + hours + "<span>时 </span>" + minutes + "<span>分 </span>" + seconds + "<span>秒</span>";
        }

        if (res.data.data.status == '3') {
          Time = setInterval(() => {
            currentTimeStart -= 1000;
            if (currentTimeStart <= 0) {
              res.data.data.beginDate = 0;
              this.detaliData();
            } else {
              res.data.data.beginDate = formatDuring(parseInt(currentTimeStart))
            }
          }, 1000);
        } else {
          Time = setInterval(() => {
            res.data.data.endDate = formatDuring(parseInt(currentTime))
            currentTime -= 1000;
          }, 1000);
        }

        setTimeout(() => {
          this.goodsDetail = res.data.data //避免页面时间位置闪烁
        }, 1000)

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
  max-width: 106px;
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
.detaList .dt_parame {
  padding: 100px 0 0 85px;
}
.detaList .dt_parame .el-col {
  font-size: 16px;
  color: #333;
  height: 50px;
  line-height: 50px;
}
.detaList .dt_parame .CountDown {
  color: #ee2e2e;
}
.detaList .dt_parame .CountDown >>> span {
  color: #333;
}
.detaList .dt_parame div:nth-child(1) {
  font-weight: bold;
}
.detaList .dt_parame .el-col .btn {
  margin: 30px auto 0;
  padding: 10px 40px;
}
.detaList .el-dialog-padding {
  padding: 65px;
}
/*商品弹窗*/
.pricePopup {
  width: 100%;
  margin: 0 0 25px;
  position: relative;
}
.pricePopup > span {
  position: absolute;
  right: 25px;
  top: 20px;
  font-size: 20px;
  color: #ee2e2e;
}
.pricePopup p {
  font-size: 15px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
}
.pricePopup p:nth-of-type(2) span {
  color: #ee2e2e;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
}
.el-dialog__body {
  padding-top: 0;
}
.btn_close {
  width: 100px;
  padding: 8px 15px;
  background: #e3e3e3;
  border: 1px solid #e3e3e3;
  color: #717171;
  margin-left: 40px;
}
.btn_success {
  width: 100px;
  padding: 8px 15px;
  float: right;
  background: #ee2e2e;
  border: 1px solid #ee2e2e;
  margin-right: 40px;
}
.masterGraph {
  display: block;
  margin: auto;
}
</style>
