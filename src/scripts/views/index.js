var tplIndex = require('../templates/index.string');
var util = require('../utils/fn.js');

SPA.defineView('index', {
html: tplIndex,

bindEvents: {
 show: function () {
   // var myScroll = new IScroll('#home-scroll');
   
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
   
  }) 
  
 }
}
});
console.log("引入index.js");

      