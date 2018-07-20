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
                <div class="title">ipad air9成新银灰色</div>
                <img src="@/assets/images/detaliImg.png" width="592" height="357" alt="">
                <div class="listImgs">
                  <img src="@/assets/images/detaliImg.png" width="106" height="72" alt="">
                  <img src="@/assets/images/detaliImg.png" width="106" height="72" alt="">
                  <img src="@/assets/images/detaliImg.png" width="106" height="72" alt="">
                  <img src="@/assets/images/detaliImg.png" width="106" height="72" alt="">
                  <img src="@/assets/images/detaliImg.png" width="106" height="72" alt="">
                </div>
              </el-col>
              <el-col :span="12" class="dt_parame">
                <el-row>
                  <el-col :span="3">当前价：</el-col>
                  <el-col :span="21">
                    <span class="price">450元</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">起拍价：</el-col>
                  <el-col :span="21">300元</el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">距结束：</el-col>
                  <el-col :span="21">00天14时35分7.4秒</el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">加价：</el-col>
                  <el-col :span="21">
                    <el-radio-group v-model="radio1" size="small">
                      <el-radio-button label="10元"></el-radio-button>
                      <el-radio-button label="20元"></el-radio-button>
                      <el-radio-button label="50元"></el-radio-button>
                      <el-radio-button label="100元"></el-radio-button>
                      <el-radio-button label="200元"></el-radio-button>
                    </el-radio-group>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-button type="primary" round size="small" class="btn">参与竞价</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <div class="details_text">
              <p>况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等da况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等</p>
              <p>况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等
                等有没有破等等破损情况等等有破等等da况等等有没有破损情况等等用有况等等没况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等
                有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等da况等等有没有破损情况等等
                用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等</p>
              <p>况等等有没有破损情况等等用有况等等没有破损情况等等什么破损情况等等有没有破等等破损情况等等有破等等</p>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '10元'
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
.details_text{
  color:#888;
  font-size:14px;
  line-height: 26px;
  margin:20px 0;
}
.details_text p{
  text-indent: 2em;
  margin:10px 0;
}
.dt_parame{
  padding:100px 0 0 35px
}
.dt_parame .el-col{
font-size:16px;
color:#333;
height:50px
}
.dt_parame .el-col .btn{
  margin:30px auto 0;
  padding:10px 40px
}
</style>
