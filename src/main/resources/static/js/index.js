new Vue({
    el:"#app",
    data:{
        tabMenus:[],
        asizeMenus:[],
        activeIndex: '/menu1',
    },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleSelect(key, keyPath) {
          console.log("11111",key, keyPath);
          console.log(typeof(key));
          window.location.href="/home"+key; 
//          axios.get(key)
//          .then(function (response) {
//            // handle success
//            console.log(response);
//          })
        }
      }
});