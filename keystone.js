var keystone = require('keystone');

keystone.init({

	'name': 'KeyRe',
	'brand': 'KeyRe',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '057fff2955ef471c3e2c9bdc60dcfb5daac519cd1a4033184b6d166419c2982227b2b10b19701dba3ea21cb63e16f168d90de4c10f73295213e34776d4e5494f',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
        'posts': ['posts', 'post-categories'],
	'users': 'users'
});

keystone.start();
