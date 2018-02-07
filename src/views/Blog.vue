<template>
  <div class="blog">
    <blog-header></blog-header>
    <div class="content">
      <div class="container">
        <el-row :gutter="50">
          <el-col :span="16" class='main-list'>
            <div class="grid-content">
              <blog-list :filterWords="filterWords"></blog-list>
            </div>
          </el-col>
          <el-col :span="8" class='side-list'>
            <div class="grid-content">
              <search v-on:filterArticle="setFilterWords"></search>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'
import Search from '@/components/Search'

export default {
  name: 'Blog',
  components: {
    'blogHeader': Header,
    'blogFooter': Footer,
    'blogList': BlogList,
    'search': Search,
  },
  data () {
    return {
      filterWords: '',
    }
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((rsp) => {
          this.$store.commit('initBlogList', rsp.data);
          this.$store.commit('setCurrentBlogList', rsp.data);
        })
    },
    setFilterWords(text) {
      console.log(text)
      this.filterWords = text;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/blog.css'
</style>
