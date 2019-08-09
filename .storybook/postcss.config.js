module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-nested': {},
		'postcss-preset-env': {
			stage: 3,
			browsers: 'last 2 versions',
			features: {
				'custom-media-queries': true,
				'color-mod-function': { unresolved: 'warn' },
				// a{all: initial} = initialise tout le css stage 3
				// break properties = mise en page comme sur indesign stage 3
				'overflow-wrap-property': true,
				'place-properties': true,
				'custom-properties': {
					preserve: false,
				},
			},
			autoprefixer: { grid: true },
			// importFrom: './src/styles/variables.css',
		},
	},
};
