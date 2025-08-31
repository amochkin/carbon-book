/* eslint-disable */

/** @type {import('@p8ec/shared').PrettierConfigOverride} */
const override = {
	// tabWidth: 4,
	plugins: ['prettier-hugo-plugin'],
};

module.exports = require('@p8ec/shared').prettierConfigRecommended(override);
