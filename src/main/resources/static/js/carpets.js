new Vue({
    el:"#carpets",
    data:{
        activeIndex: '/carpets',
        dialogVisible: false
    },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          window.location.href = key; 
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
         }
      }
});