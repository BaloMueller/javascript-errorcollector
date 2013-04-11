'use strict';

describe('Always', function() {
	it('should attach to window.onerror', function() {
		expect(window.onerror).not.toBe(null);
	});
});


describe('When an unhandled error is thrown', function() {
	var cSpy;
	beforeEach(function(done) {
		cSpy = spyOn(window, "Image").andCallThrough();
		setTimeout(function() {
			done();					
			throw "unhandled exception";					
		}, 0);
	});

	it('should create an image', function() {
		expect(cSpy).toHaveBeenCalled();
	});
});