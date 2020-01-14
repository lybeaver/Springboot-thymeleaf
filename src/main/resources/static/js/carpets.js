new Vue({
    el:"#carpets",
    data:{
        activeIndex: '/carpets',
        dialogVisible: false,
        albumVisible: false,
        fileList: [],
        form: {
        	name: "",
        	activeImageUrl: ""
        },
        originalImages: [],
        items:[],
        //item: {id:'',originalImage:'',childImage:{activeImg:'',list:[]}},
        dialogChildImg: {},
        isNext: true,
        isPre: true
    },
    mounted:function() {
  	  console.log("mounted");
  	  let list = $('#imgList').val();
  	  let data = JSON.parse(list) || [];
  	  let tempArr = [];
  	  //this.items = data;
  	  console.log(typeof(list));
  	  console.log(list);
  	  data.forEach(function(currentValue,index){
  		  currentValue.activeImageUrl = '../img/' + currentValue.activeImageUrl;
  		  tempArr.push(currentValue);
  		  console.log("currentValue currentValue",currentValue);
  	  });
  	  this.items = tempArr;
  	},
    methods: {
    	beforeMount() {
    	  console.log("beforeMount");
    	},
    	updated() {
    	  console.log("updated");
    	},
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
         },
         doActiveImg(item) {
        	 console.log('item item',item);
        	 this.dialogChildImg.activeImg = item;
        	 console.log('dialogChildImg dialogChildImg',this.dialogChildImg);
        	 console.log('activeImg activeImg',this.dialogChildImg.activeImg==='../img/fc30479ceabb4351b7a9b1520132e329.jpeg');
        	 this.initDialog(this.dialogChildImg);
         },
         preImg(dialogChildImg) {
        	 if (this.isPre) {
        		 this.dialogChildImg.activeImg = this.dialogChildImg.list[dialogChildImg.list.indexOf(dialogChildImg.activeImg)-1];
        		 this.initDialog(dialogChildImg);
        	 }
         },
         nextImg(dialogChildImg) {
        	 if (this.isNext) {
        		 this.dialogChildImg.activeImg = this.dialogChildImg.list[dialogChildImg.list.indexOf(dialogChildImg.activeImg)+1];
        		 this.initDialog(dialogChildImg);
        	 }
         },
         initDialog(childImage) {
        	 //this.dialogChildImg.list = childImage.list;
        	 if (childImage.list.length == 1) {
        		 this.isPre = false;
        		 this.isNext = false;
        	 } else {
        		 if (childImage.list.indexOf(childImage.activeImg) == 0) {
            		 this.isPre = false;
            		 this.isNext = true;
            	 } else if (childImage.list.indexOf(childImage.activeImg) == childImage.list.length-1) {
            		 this.isPre = true;
            		 this.isNext = false;
            	 } else {
            		 this.isPre = true;
            		 this.isNext = true;
            	 }
        	 }
         },
         getChildImages(parentId,activeImg) {
        	 var _this = this;
        	 axios.get('/carpet/getCommodityByParentId/'+parentId)
        	  .then((response)=> {
        		  if (response.data) {
        			  let data = response.data || [];
        			  let childImgs = [];
        			  let childTemp = {};
        			  _this.dialogChildImg = {};
        			  _this.dialogChildImg.activeImg = activeImg ? activeImg : data[0];
        			  data.forEach(function(value, index) {
        				  childImgs.push('../img/'+value.originalImageUrl);
        			  });
        			  _this.dialogChildImg.list = childImgs;
//        			  childTemp.list = childImgs;
//        			  childTemp.activeImg = this.dialogChildImg.activeImg;
        			  _this.initDialog(_this.dialogChildImg);
        		  }
        	    console.log(response);
        	  })
        	  .catch((error)=> {
        	    console.log(error);
        	  });
        	 console.log("child",this.dialogChildImg);
         },
         submitUpload() {
        	 axios.post('/carpet/saveCommodity',{name:this.form.name, activeImageUrl:this.form.activeImageUrl, originalImages:this.originalImages}
        	 ).then(function (response) {
        	     if (response.data == 'success') {
        	    	 window.location.href = '/carpet/list';
        	     }
        	 }).catch(function (error) {
        	     console.log(error);
        	 })
         },
         handleRemove(file, fileList) {
        	 console.log(file, fileList);
         },
         handlePreview(file) {
        	 console.log(file);
         },
         handleSuccess(response, file, fileList) {
        	 if (file.status == 'success') {
        		 this.originalImages.push(response);
        	 }
         }
      }
});