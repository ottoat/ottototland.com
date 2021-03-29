module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			yellow: '#C3A741',
			white: '#F3EDD7',
			green: '#4C544B',
			blue: '#304E5E',
			beige: '#B1AA93',
			sienna: {
				DEFAULT: '#5E3630',
				dark: '#180E0C'
			}
		},
		fontFamily: {
			sans: ['Barlow Condensed', 'sans-serif']
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widest: '.35em',
		},
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			lineHeight: {
				'extra-tight': 0.75
			},
			translate: {
				'3/100': '3%',
				'-3/100': '-3%'
			},
			rotate: {
				'-5': '-5deg',
				'5': '5deg'
			}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
