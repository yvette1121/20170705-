var showFlag = true;
window.onload = function(){
  var toTop = document.getElementById('toTop');
  var showCode = document.getElementById('show');
  var timer = null;
  toTop.onclick = function() {
    //设置定时器
    timer = setInterval(function(){
      //获取滚动条距离顶部高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 7);
       
      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
      //到达顶部，清除定时器
      if (osTop == 0) {
        clearInterval(timer);
      };
       
    },30);
  };
	$("#show").click(function(){
		if(showFlag == false){
			$(".show-bg").animate({right:"0px"})
			showFlag = true;
			return;
		}
		else {
			$(".show-bg").animate({right:"100px"})
			showFlag = false;
			return;
		}

	})
};