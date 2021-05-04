import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible/flexible'
import '@vant/touch-emulator';
import { Button, Swipe, SwipeItem, NavBar, Field, Popup, Search, Tabbar, TabbarItem, Tab, Tabs, Stepper, GoodsAction, GoodsActionIcon, GoodsActionButton, SwipeCell, Card, SubmitBar, Checkbox, CheckboxGroup, AddressEdit, AddressList, Area, Icon, Collapse, CollapseItem, Form, ShareSheet, Uploader } from 'vant'
//注册
Vue
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(NavBar)
  .use(Field)
  .use(Popup)
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Stepper)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(SwipeCell)
  .use(Card)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(AddressEdit)
  .use(AddressList)
  .use(Area)
  .use(Icon)
  .use(Collapse)
  .use(CollapseItem)
  .use(Form)
  .use(ShareSheet)
  .use(Uploader);

Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
