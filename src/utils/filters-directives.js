import Vue from 'vue'

Vue.filter('orgType',function(val){
  let typeList = ['教育局', '学校', '部门'];
  return typeList[val - 1];
});

//指令实例
Vue.directive('permission', {
  componentUpdated: (el, binding, vnode) => {
    if(!binding.value){
      el.remove()
    }
  }
})

Vue.mixin({
  methods: {
    creatPermit(arr){
      let res = {};
      arr.forEach(val => {
        res[val] = val;
      });
      return res;
    }
  }
});
