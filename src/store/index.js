import vuex from 'vuex';
import Vue from 'vue';
import {constanceRoutes,asyncRouterMap} from '../router';

 Vue.use(vuex);

 const state={
    addRoutes:asyncRouterMap
 };

 const mutations={

 }

 const actions={

 }
 const getters = {
     
 }

 const store =new vuex.Store({
     state,
     getters,
     mutations,
     actions
 })

 export default store;