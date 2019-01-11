autodivheight();
function autodivheight(){ //函数：获取尺寸
    //获取浏览器窗口高度
    var winHeight = 0;
    // if (window.innerHeight){
    //     window.screen.height
    //     winHeight = window.innerHeight;
    // } else if ((document.body) && (document.body.clientHeight)){
    //     winHeight = document.body.clientHeight;
    // }
    // if (document.documentElement && document.documentElement.clientHeight){
    //     winHeight = document.documentElement.clientHeight;
    // }
    console.log("document.body.clientHeight",document.body.clientHeight);
    console.log("window.screen.height",window.screen.height);
    if (window.screen.height) {
        winHeight = window.screen.height;
    }
    //DIV高度为浏览器窗口的高度
    document.getElementById("left-panel").style.height= winHeight - 120 + "px";
    document.getElementById("right-panel").style.height= winHeight - 120 + "px";
}
// window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度
// 网页可见区域宽： document.body.clientWidth
// 网页可见区域高： document.body.clientHeight
// 网页可见区域宽： document.body.offsetWidth (包括边线的宽)
// 网页可见区域高： document.body.offsetHeight (包括边线的高)
// 网页正文全文宽： document.body.scrollWidth
// 网页正文全文高： document.body.scrollHeight
// 网页被卷去的高： document.body.scrollTop
// 网页被卷去的左： document.body.scrollLeft
// 网页正文部分上： window.screenTop
// 网页正文部分左： window.screenLeft
// 屏幕分辨率的高： window.screen.height
// 屏幕分辨率的宽： window.screen.width
// 屏幕可用工作区高度： window.screen.availHeight
// 屏幕可用工作区宽度： window.screen.availWidth