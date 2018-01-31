<template>
  <div class="blog">
    <div class="header-pic">
      <div class="container">
        <div class="title">
          <h1>Bulijiojio</h1>
        </div>
      </div>
    </div>    
    <blog-header></blog-header>
    <div class="content">
      <div class="container">
        <el-row :gutter="50">
          <el-col :span="15"><div class="grid-content main-list"></div></el-col>
          <el-col :span="9"><div class="grid-content side-list"></div></el-col>
        </el-row>
      </div>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Blog',
  data () {
    return {
      
    }
  },
  components: {
    'blog-header': Header,
    'blog-footer': Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/blog.css'
</style>
