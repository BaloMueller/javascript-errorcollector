'use strict';

//define('errorcollector.specs', ['errorcollector'], function() {

	describe('Always', function() {
		it('should attach to window.onerror', function() {
			expect(window.onerror).not.toBe(null);
		});
	});

	describe('When an error is thrown', function() {

	});

//});
