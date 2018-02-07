<template>
  <div class="article-list">
    <div v-if="dataList.length>0">
      <article v-for="item in dataList">
        <router-link :to="'/blog/'+item.id">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
        </router-link>
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
      <h2>Oops! No blog was founded!</h2>
    </div>  
  </div>
  
</template>

<script>
export default {
  name: 'BlogList',
  props: ['filterWords'],
  data () {
    return {
      
    }
  },
  methods: {
    pageChange(currentPage) {
      this.$store.commit("setPageNum", currentPage-1);
    },

  },
  computed: {
    dataList() {
      var datas = this.$store.state.allArticle;
      if (this.filterWords.length > 0) {
        datas = datas.filter((data) => {
          return data.title.match(this.filterWords);
        })
      }
      this.$store.commit('setCurrentBlogList', datas);
      datas = this.$store.getters.getArticlePage;
      console.log(datas)
      return datas;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list {
    min-height: 200px;
    padding: 12px;
    line-height: 40px;
}
.article-list a {
  text-decoration: none;
}
.article-list h2 {
    font: bold 2.2em/1.1em Arial, sans-serif;
    color: #3E3E3E;
    margin: 40px 0 0.5em;
}
.article-list p {
    box-sizing: border-box;
    margin: 30px 0 40px;
    list-style: none;
    font: 300 17px/1.5em "Helvetica Neue", Helvetica, sans-serif;
    color: #555555;
}
.pagination {
  width: 100%;
  text-align: center;
}
article {
  border-bottom: 1px solid #E0E0E0;
}
</style>
