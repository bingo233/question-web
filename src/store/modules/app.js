import Cookie from 'js-cookie'

const coolie_is_collapse = 'coolie_is_collapse';
const app = {
  state: {
    device: 'desctop',
    slider: {
      isCollapse: !!+Cookie.get(coolie_is_collapse)
    }
  },
  mutations:{
    TOGGLE_SLIDER(state) {
      if(state.slider.isCollapse){
        state.slider.isCollapse = false;
        Cookie.set(coolie_is_collapse,0)
      }else {
        state.slider.isCollapse = true;
        Cookie.set(coolie_is_collapse,1)
      }
    }
  },
  actions: {

  }
};

export default app
