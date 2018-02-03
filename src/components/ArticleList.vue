<template>
  <div class="article-list">
      <article v-for="item in dataList">
          <h2>{{item.title}}</h2>
          <div>{{item.body}}</div>
      </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: [
    'dataList'
  ],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list {
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
</style>
