'use strict';

define('errorcollector', [], function() {

	var otherOnerror = window.onerror;
	window.onerror = function(msg,url,l) {
		if(otherOnerror) {
			otherOnerror(msg, url, l);
		}

		var bag = {
			'msg': msg,
			'url': url,
			'line': line,
			'stack': stack,
			'platform': navigator.platform,
			'userAgent': navigator.userAgent
		};


		$.post("/diagnostics/javascriptexceptions", bag):
	};

});
