/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
		colors: {
			primary: '#AE5300',
			secondary: '#FEE699',
			borderColor: '#C07F00',
			textstandard: '#3C1C00',
			webBackground: '#FFFDF5',
			webBackground2: '#FFF1E4',
			webBackground3: '#FFF5E0'
		},
		fontFamily: {
			body: ['Poppins']
		}
	  },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}

