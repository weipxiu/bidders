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

</style>
