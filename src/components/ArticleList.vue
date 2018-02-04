<template>
  <div v-if="this.$store.getters.getArticleCount>0" class="article-list">
      <article v-for="item in dataList">
          <h2>{{item.id}}. {{item.title}}</h2>
          <div>{{item.body}}</div>
      </article>
      <div class="pagination">
        <el-pagination
          background
          layout='prev, pager, next'
          :total="this.$store.getters.getArticleCount"
          :page-size="this.$store.state.itemCount"
          @current-change="pageChange">
        </el-pagination>
      </div>
  </div>
  <div v-else class="article-list">
    <h2>Oops! No articles for now!</h2>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      
    }
  },
  methods: {
    pageChange(currentPage) {
      this.$store.commit("setPageNum", currentPage-1);
    }
  },
  computed: {
    dataList() {
      return this.$store.getters.getArticlePage;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list {
    min-height: 200px;
    padding: 12px;
}
.article-list h2 {
    font-size: 24px;
    font-weight: 500px;
    margin: 18px 0 5px;
}
.article-list div {
    margin: 10px 0 40px;
}
.pagination {
  width: 100%;
  text-align: center;
}
</style>
