var otherOnerror = window.onerror;
window.onerror = function(msg,url,l) {
    'use strict';

    if (otherOnerror) {
		otherOnerror(msg, url, l);
	}

	var bag = {
		'msg': msg ? msg : '',
		'url': url ? url : '',
		'line': l ? l : '',
		'platform': navigator.platform,
		'userAgent': navigator.userAgent
	};


	$.post("/diagnostics/javascriptexceptions", bag);
};