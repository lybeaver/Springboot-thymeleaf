new Vue({
    el:"#menu2",
    data:{
        tabMenus:[],
        asizeMenus:[],
        tabPosition: 'top',
        activeIndex: '/menu2',
    },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
//          axios.get(key).then(function (response) {
//            console.log(response);
//          })
        }
      }
});