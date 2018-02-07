// jshint esversion: 6
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    allArticle: [], // 所有博客数据
    currentBlogList: [],  // 过滤后的博客数据
    itemCount: 6, //一页显示的文章数
    pageNum: 0  //当前页数
  },
  getters: {
    // 生成当前页对应的文章列表
    getArticlePage: (state) => {
        var data = state.currentBlogList;
        var start = state.pageNum*state.itemCount;
        var end = start + state.itemCount;

        return data.slice(start, end);
    },
    // 获取页数
    getPageCount: (state) => {
        var data = state.currentBlogList;
        var pageCount = Math.round(data.length / state.itemCount);

        return pageCount;
    },
    // 获取文章总数
    getArticleCount: (state) => {
        return state.currentBlogList.length;
    }
  },
  mutations: {
    // 初始化所有文章
    initBlogList(state, list) {
        state.allArticle = list;
    },
    // 设置当前页数
    setPageNum(state, num){
        state.pageNum = num;
    },
    setCurrentBlogList(state, list) {
        state.currentBlogList = list;
    }
  }
});
