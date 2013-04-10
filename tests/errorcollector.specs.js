'use strict';

	setTimeout(function() {
		throw "unhandled exception";					
		throw "unhandled exception";	
	}, 0);

xdescribe('Always', function() {
	it('should attach to window.onerror', function() {
		expect(window.onerror).not.toBe(null);
	});
});

describe('When an unhandled error is thrown', function() {

	beforeEach(function(done) {
		spyOn($, "post");
		setTimeout(function() {
			done();					
			//throw "unhandled exception";					
		}, 0);
	});

	it('should make an ajax call', function() {
		expect($.post).toHaveBeenCalled();
	});
});

xdescribe('When foobar', function() {

	beforeEach(function() {
		spyOn($, "post");
	});

	it('should make an ajax call', function() {
		
		expect(function() { throw new Error(); }).toThrow();
		expect($.post).toHaveBeenCalled();
	});
});