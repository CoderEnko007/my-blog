<template>
  <div class="single-blog">
      <blog-header></blog-header>
      <div class="content">
          <div class="main">
            <h2>{{blog.title}}</h2>
            <p>{{blog.body}}</p>
          </div>
      </div>
      <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'single-blog',
  components: {
    'blogHeader': Header,
    'blogFooter': Footer
  },
  data () {
    return {
        id: this.$route.params.id,
        blog: {}
    }
  },
  created() {
    this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(rsp => {
            this.blog = rsp.data;
            console.log(this.blog)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    width: 100%;
    margin-top: 20px;
    line-height: 40px;
}
.single-blog {
    background-color: #F4F4F4FF;
}
.main {
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    padding: 60px;
    border-radius: 10px;
    box-shadow: 0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
    /*box-shadow: 0 0 15px #333;*/
    background-color: #FFF;
}
.main h2 {
    font: bold 2.2em/1.1em Arial, sans-serif;
    color: #3E3E3E;
    margin: 0 0 0.5em;
}
.main p {
    margin: 80px 0 40px;
    font: 300 17px/1.5em "Helvetica Neue", Helvetica, sans-serif;
    color: #555555;
}
</style>
