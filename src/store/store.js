// jshint esversion: 6
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    messageLists: [],
    itemCount: 6, //一页显示的文章数
    pageNum: 0  //当前页数
  },
  getters: {
    getArticlePage: (state) => {
        var data = state.messageLists;
        var start = state.pageNum*state.itemCount;
        var end = start + state.itemCount;

        return data.slice(start, end);
    },
    getPageCount: (state) => {
        var data = state.messageLists;
        var pageCount = Math.round(data.length / state.itemCount);

        return pageCount;
    },
    getArticleCount: (state) => {
        return state.messageLists.length;
    }
  },
  mutations: {
    initArticleList(state, list) {
        state.messageLists = list;
    },
    setPageNum(state, num){
        state.pageNum = num;
    }
  }
});
