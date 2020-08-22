import axios from 'axios';
import Vue from 'vue';
export default {
    install(){
        axios.defaults.baseURL='http://localhost:8080/'
        Vue.prototype.$axios = axios;
    }
}