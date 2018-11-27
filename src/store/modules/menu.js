import menuApi from '@/api/menu'
const menu = {
  state: {
    menus: null
  },
  mutations:{
    SET_MENUS(state,menus){
      state.menus = menus;
    }
  },
  actions: {
    getMenus({ commit }) {
      return new Promise((resolve, reject) => {
        menuApi.getMenuList(res => {
          if (res.code === 200) {
            commit("SET_MENUS",res.data)
            resolve(res.data)
          }
        })
      })
    }
  }
}

export default menu