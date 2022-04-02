import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLink:false,//true-外网链接，false-路由跳转
    iframeUrl:'',//外网跳转链接
    time:''
  },
  getters:{
    isLink(state){
      return state.isLink
    },
    iframeUrl(state){
      return state.iframeUrl
    }
  },
  mutations: {
    setLink (state ,payload){
      console.log(state,payload,'vuex-------')
      state.isLink = payload.isLink || false
      state.iframeUrl = payload.path;
    },
    getTime(state,payload){
      console.log(payload,'getTime--------打印')
      let {data} = payload;
      state.time = data.time;
      console.log(state.time,'++++')
    },
    [ 'CLEAR_INFO' ] (state ,payload){
      let { info } = state
      for (let key of payload) {
        console.log(key);
        info[key] = null
      }
      state.info = info
    },
    [ 'UPDATE_TYPE' ] (state ,payload){
      state.type = payload
    },
    [ 'UPDATE_DATA_USERINFO' ] (state ,payload){
      state.userInfo = payload
    },
    ['UPDATE_LOCATION'] (state ,payload){
      state.location = payload
    },
  },
  actions:{
    async actionsGetTime({dispatch,commit},data2){
      console.log(data2,'--------actionsGetTime')
      commit('getTime',await dispatch('returnTime'))
    },
    returnTime(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve({code:'200',data:{time:11}})
        },3000)
      })
    }
  }
});

export default store;
