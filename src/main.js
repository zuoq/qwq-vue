var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');
var VueTouch = require('vue-touch');
// var Modal = require('./lib/js/modal.js');

var app = require('./views/app.vue');
var index = require('./views/index.vue');
var xiaohua = require('./views/xiaohua.vue');
var quwei = require('./views/quwei.vue');
var about = require('./views/about_us.vue');
var jokeFl = require('./views//components/joke_fl.vue')
// var app = require('./components/app.vue');
// var login = require('./components/login.vue');
// var register = require('./components/register.vue');
// var good_detail = require('./components/good_detail.vue');
// var user = require('./components/user.vue');
// var filter = require('./components/filter.vue');

Vue.use(Resource);
Vue.use(Router);
Vue.use(VueTouch);
// Vue.use(Modal);
var router = new Router();

Vue.config.debug = true;

Vue.http.options.xhr = {
    withCredentials : true
};
router.map({
    '/': {
        component: index
    },
    '/xiaohua': {
    	component: xiaohua	
    },
    '/xiaohua/:link/:title': {
    	name:'xiaohua',
    	component:jokeFl
    },
    '/quwei': {
    	component: quwei	
    },
    'about': {
    	component:about
    }
    // subRoutes: {
    // 	'/interest': {
    // 		component:
    // 	},
    // }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.start(app, '#app');


