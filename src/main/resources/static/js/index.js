new Vue({
    el:"#app",
    data:{
            tabMenus:[],
            asizeMenus:[],
            activeName2: 'first',
            tabPosition: 'top',
            activeIndex: '1',
            activeIndex2: '1'
        },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
});