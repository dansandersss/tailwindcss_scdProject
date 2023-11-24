/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/index.html'],
  theme: {
    extend: {
			fontFamily: {
				dmSans : ['DM Sans', 'sans-serif'],
			},
			colors: {
				primary: '#118DA8',
				secondary: '#FCFF51',
				bgMain: '#191919'
			},
			height: {
				'line' : '2px'
			},
			container: {
				center: true,
				padding: {
					default: '1rem',
					sm: '2rem',
					md: '3rem',
					lg: '4rem',
					xl: '5rem',
				},
			},
		},
		
  },

	variants: {
    extend: {
      transform: ['group-hover'],
    },
	},
  plugins: [],
}

