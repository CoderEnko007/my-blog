<template>
  <el-menu class="el-menu demo" mode="horizontal" v-bind:default-active="activeIndex" v-on:select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
          <template>分类a</template>
          <el-menu-item index="2-1">JavaScript</el-menu-item>
          <el-menu-item index="2-2">HTML/CSS</el-menu-item>
          <el-menu-item index="2-3">Python</el-menu-item>
          <el-menu-item index="2-4">Android</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">留言</el-menu-item>
      <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      activeIndex = '1',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
