<template>
  <div id="header">
    <div class="header-pic">
      <div class="container">
        <div class="title">
          <h1>{{title}}</h1>
        </div>
      </div>
      <div class="navigation">
        <el-menu 
          class="el-menu-demo" 
          mode="horizontal" 
          text-color="#fff"
          active-text-color="#7DC6F0"
          background-color="#000"
          v-bind:default-active="activeIndex" 
          v-on:select="handleSelect">
            <el-menu-item index="1"><router-link to="/">首&nbsp;&nbsp;&nbsp;&nbsp;页</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot='title'>分&nbsp;&nbsp;&nbsp;&nbsp;类</template>
                <el-menu-item :index="''+tag.subindex" v-for="tag in tags" :key='tag.subindex'>{{tag.subitem}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">留&nbsp;&nbsp;&nbsp;&nbsp;言</el-menu-item>
            <el-menu-item index="4"><router-link to="">关&nbsp;&nbsp;&nbsp;&nbsp;于</router-link></el-menu-item>
        </el-menu>
      </div>
    </div>

  </div>  
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      tags:[],
      title:'Bulijiojio',
      search:''
    }
  },
  methods: {
    getTags() {
      this.tags = [
        {subitem:'JavaScript', subindex:'2-1', other:''},
        {subitem:'HTML/CSS', subindex:'2-2', other:''},
        {subitem:'Python', subindex:'2-3', other:''},
        {subitem:'Android', subindex:'2-4', other:''}
      ]
    },
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    },
  },
  mounted() {
    this.getTags();
    // console.log(this.tags)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/css/header.css'
</style>
