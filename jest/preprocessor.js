// taken from https://github.com/facebook/react/blob/master/jest/preprocessor.js
"use strict";

var ReactTools = require('react-tools');

module.exports = {
	process: function(src) {
		return ReactTools.transform(src, {harmony: true});
	}
};
