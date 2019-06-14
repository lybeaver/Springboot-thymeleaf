new Vue({
    el:"#carpets",
    data:{
        activeIndex: '/carpets',
        dialogVisible: false,
        items:[
        		{	
        			id:"1001",
        			thumbnail:"img/tm-img-01-tn.jpg",
        			originalImage:"img/tm-img-01.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-01.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1002",
        			thumbnail:"img/tm-img-02-tn.jpg",
        			originalImage:"img/tm-img-02.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-02.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1003",
        			thumbnail:"img/tm-img-03-tn.jpg",
        			originalImage:"img/tm-img-03.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-03.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1004",
        			thumbnail:"img/tm-img-04-tn.jpg",
        			originalImage:"img/tm-img-04.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-04.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1005",
        			thumbnail:"img/tm-img-05-tn.jpg",
        			originalImage:"img/tm-img-05.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-05.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1006",
        			thumbnail:"img/tm-img-06-tn.jpg",
        			originalImage:"img/tm-img-06.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-06.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1007",
        			thumbnail:"img/tm-img-07-tn.jpg",
        			originalImage:"img/tm-img-07.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-07.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1008",
        			thumbnail:"img/tm-img-08-tn.jpg",
        			originalImage:"img/tm-img-08.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-08.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1009",
        			thumbnail:"img/tm-img-09-tn.jpg",
        			originalImage:"img/tm-img-09.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-09.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1010",
        			thumbnail:"img/tm-img-10-tn.jpg",
        			originalImage:"img/tm-img-10.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-10.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1011",
        			thumbnail:"img/tm-img-11-tn.jpg",
        			originalImage:"img/tm-img-11.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-11.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1012",
        			thumbnail:"img/tm-img-12-tn.jpg",
        			originalImage:"img/tm-img-12.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-12.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1013",
        			thumbnail:"img/tm-img-13-tn.jpg",
        			originalImage:"img/tm-img-13.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-13.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1014",
        			thumbnail:"img/tm-img-14-tn.jpg",
        			originalImage:"img/tm-img-14.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-14.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{	
        			id:"1015",
        			thumbnail:"img/tm-img-15-tn.jpg",
        			originalImage:"img/tm-img-15.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-15.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        		{
        			id:"1016",
        			thumbnail:"img/tm-img-16-tn.jpg",
        			originalImage:"img/tm-img-16.jpg",
        			childImage:{
	        			activeImg:"img/tm-img-16.jpg",
	        			list: [  
	        					 "img/tm-img-01.jpg","img/tm-img-02.jpg","img/tm-img-03.jpg","img/tm-img-04.jpg"
	            				,"img/tm-img-05.jpg","img/tm-img-06.jpg","img/tm-img-07.jpg","img/tm-img-08.jpg"
	            				,"img/tm-img-09.jpg","img/tm-img-10.jpg","img/tm-img-11.jpg","img/tm-img-12.jpg"
	            				,"img/tm-img-13.jpg","img/tm-img-14.jpg","img/tm-img-15.jpg","img/tm-img-16.jpg"
	            			]
        			}
        		},
        	  ],
        dialogChildImg: {},
        isNext: true,
        isPre: true
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
         },
         doActiveImg(item) {
        	 this.dialogChildImg.activeImg = item;
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
        	 this.dialogChildImg = childImage;
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
         }
      }
});