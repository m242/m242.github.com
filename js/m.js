window._gaq = [['_setAccount','UA-25068800-1'],['_trackPageview'],['_trackPageLoadTime']];

Modernizr.load([
	{
		test: Modernizr.backgroundsize,
		nope: ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js',
			'js/jquery.backstretch.min.js'],
		callback: function (url, result, key) {
			if (url === 'js/jquery.backstretch.min.js') {
				$.backstretch('img/bg.jpg');
			}
		}
	}
]);

setTimeout(function() { 
	Modernizr.load([
		{
			load: [(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'),
				'http://apis.google.com/js/plusone.js',
				'http://platform.twitter.com/widgets.js',
				'http://connect.facebook.net/en_US/all.js#appId=247895271899695&xfbml=1'],
			callback: function (url, result, key) {
				if (url == 'http://platform.twitter.com/widgets.js') {
					// $(".twitter-follow-button").show();
				}
			}
		}
	]);
}, 20);

