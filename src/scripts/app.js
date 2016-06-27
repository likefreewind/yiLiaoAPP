// 引入spa类库
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./lib/swiper-3.3.1.min.js');

// 引入views
require('./views/index.js');
require('./views/guide.js');
require('./views/my.js');
require('./views/qushi.js');
require('./views/gongying.js');


//SPA 设置
SPA.config({
  indexView: 'guide'
});
