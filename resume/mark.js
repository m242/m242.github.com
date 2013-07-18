;$(function() {

	showTweets = function($div, word, f) {
		var twoproblems = new RegExp(word, "i")
		$.getJSON("http://search.twitter.com/search.json?rpp=10&q=" + encodeURIComponent(word) + "&result_type=recent&geocode=37.781157,-122.398720,25mi&callback=?", function(data) {
			var results, i, first, tweet, html, text, from_user_name;
			results = data.results;
			first = true
			for(i=0;i<results.length;i++) {
				tweet = results[i];
				text = tweet.text;
				if(twoproblems.test(text)) {
					text = text.replace(twoproblems, "<em>" + word + "</em>");
					from_user_name = tweet.from_user_name.replace(new RegExp(word, "i"), "<em>" + word + "</em>");
					html = "<div class=\"item " + (first ? "active" : "") + "\"><span class=\"profile_image_url\"><img class=\"profile\" src=\"" + tweet.profile_image_url + "\" width=\"48\" height=\"48\"></span>" +
						"<span class=\"from_user_name\">" + from_user_name + " says: </span>" +
						"<span class=\"text\">" + text + "</span></div>";
						$div.append(html);
					first = false
				}
			}
			f();
		});
	};

	/*$(".tweet").each(function() {
			var $tweet, word;
			$tweet = $(this);
			word = $tweet.data("word");
			showTweets($tweet.find(".carousel-inner"), word, function() {
				$tweet.carousel({ interval: 3000 + Math.floor((Math.random()*5000)+1), pause: "" })
			});
	});*/
	// Twitter deprecated their JSONP interface.
	
	$("#email").each(function() {
		var $this, d, email;
		$this = $(this);
		d = new Date();
		email = "mark.resume." + (d.getYear() + 1900) + (d.getMonth() + 1) + d.getDate() + d.getHours() + d.getMinutes() + "@markbeeson.net";
		$this.html("<a href=\"mailto:" + email + "\">mark.resume@markbeeson.net</a>");
	});
	
});

$(window).load(function() {
	$("body").addClass("loaded");
});
