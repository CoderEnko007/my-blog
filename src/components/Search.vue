<template>
<div class="search">
  <div>
    <input type="text" name="search" id="search" placeholder="请输入..." v-model="searchWords" @keyup.enter="filterArticle">
    <button type="submit" @click="filterArticle"></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchWords: ''
    }
  },
  methods: {
    filterArticle() {
        // console.log(this.search)
        this.$emit("filterArticle", this.searchWords);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: 10px 0;
}
.search div {
    position: relative;
    font-weight:500;
    font-family:"Microsoft YaHei","宋体","Segoe UI","Lucida Grande",Helvetica,Arial,sans-serif,FreeSans,Arimo;
}
.search input, button {
    border: none;
    outline: none;
}
.search input {
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border: 2px solid #324B4E;
    background-color: #F9F0DA;
    padding-left: 14px;
}
.search button {
    box-sizing: border-box;
    height: 42px;
    width: 42px;
    background: none;
    top: -2px;
    right: 20px;
    cursor: pointer;
    position: absolute;
}
.search button:before {
    content: "Search";
    font-family: FontAwesome;
    color: #324b4e;
}

@media (max-width: 700px) {
    .search {
        display: none;
    } 
}
</style>
