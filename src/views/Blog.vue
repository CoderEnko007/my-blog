<template>
  <div class="blog">
    <blog-header></blog-header>
    <div class="content">
      <div class="container">
        <el-row :gutter="50">
          <el-col :span="15" class='main-list'>
            <div class="grid-content">
              <article-list :dataList="messageLists"></article-list>
            </div>
          </el-col>
          <el-col :span="9" class='side-list'><div class="grid-content"></div></el-col>
        </el-row>
      </div>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'Blog',
  components: {
    'blogHeader': Header,
    'blogFooter': Footer,
    'articleList': ArticleList,
  },
  data () {
    return {
      messageLists: [],
    }
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((rsp) => {
          this.messageLists = rsp.data.slice(0, 8);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/blog.css'
</style>
