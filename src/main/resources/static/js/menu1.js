new Vue({
    el:"#menu1",
    data:{
        tabMenus:[],
        asizeMenus:[],
        tabPosition: 'top',
        activeIndex: '/menu1',
    },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          window.location.href="/home/menu1"; 
        }
      }
});