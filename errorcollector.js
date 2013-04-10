(function () {
  var otherOnerror = window.onerror;
  window.onerror = function (msg, url, l) {
    'use strict';

    if (otherOnerror) {
        otherOnerror(msg, url, l);
    }

    var bag = {
        'msg': msg || '',
        'url': url || '',
        'line': l || '',
        'platform': navigator.platform,
        'userAgent': navigator.userAgent
    };

    var bagstring = encodeURIComponent(JSON.stringify(bag));
    bagstring = bagstring.substring(0,2000); // IE has an URL length limit
    var image = new Image(); 
    image.src = '/diagnostics/logimage?bag=' + bagstring;
  };
})();