import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// const axios = require("axios");
export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        nav: {
            home: true,
            news: true,
            activity: true,
            permission: true,
            profile: false,
            register: true,
            login: true,
            logout: false,
        },
        profile: "",
        content: "",
        news: "",
        news_detail: "",
        event_detail: "",
        benefit_detail: ""

    },
    mutations: {
        setProfile(state, array) {
            state.profile = array;
            state.nav.register = false
            state.nav.profile = true
            state.nav.login = false
            state.nav.logout = true
        },
        unsetProfile(state) {
            state.profile = ""
            state.nav.register = true
            state.nav.profile = false
            state.nav.login = true
            state.nav.logout = false
        },
        addContent(state, content) {
            state.content = content
        },
        addNews(state, news) {
            state.news = news
        },
        addNewsDetail(state, news) {
            state.news_detail = news
        },
        addEventsDetail(state, events) {
            state.event_detail = events
        },
        addBenefitsDetail(state, benefit) {
            state.benefit_detail = benefit
        }
    },

    actions: {
        addProfile(context, array) {
            // console.log(array);
            context.commit('setProfile', array);
        },
        removeProfile(context) {
            context.commit('unsetProfile');
        },
        addContent(context, content) {
            // console.log(content);
            context.commit('addContent', content);
            // alert('content');
        },
        addNews(context, news) {
            // console.log(content);
            context.commit('addNews', news);
            // alert('content');
        },
        addNewsDetail(context, news) {
            // console.log(content);
            context.commit('addNewsDetail', news);
            // alert('content');
        },

        addEventsDetail(context, events) {
            // console.log(content);
            context.commit('addEventsDetail', events);
            // alert('content');
        },
        addBenefitsDetail(context, benefit) {
            // console.log(content);
            context.commit('addBenefitsDetail', benefit);
            // alert('content');
        }
    },
    modules: {},
    getters: {
        getprofile(state) {
            return state.profile
        },
        getNav(state) {
            return state.nav
        },
        getContent(state) {
            return state.content
        },
        getNews(state) {
            return state.news
        },
        getNewsDetail(state) {
            return state.news_detail
        },
        getEventsDetail(state) {
            return state.event_detail
        },
        getBenefitsDetail(state) {
            return state.benefit_detail
        }
    }
})