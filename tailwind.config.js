/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{js}",
		"./index.html"
	],
	theme: {
		extend: {},
		fontFamily: {
			body: ["Lato", "sans-serif"],
			body2: ["League Spartan", "sans-serif"],
		},
	},
	plugins: [],
};
