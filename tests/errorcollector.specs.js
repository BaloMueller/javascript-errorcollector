'use strict';

describe('Always', function() {
	it('should attach to window.onerror', function() {
		expect(window.onerror).not.toBe(null);
	});
});

describe('When an unhandled error is thrown', function() {
	it('should make an ajax call', function() {
		spyOn($, "post");
		eval('throw "unhandled exception"');
		expect($.ajax.mostRecentCall).not.toBe(null);
	});
});