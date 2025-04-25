import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"4k": "2559px",
				laptop: "1025px",
				tablet: "768px",
				mobile: "576px",
			},
			colors: {
				background: "#f9f8d7",
				primary: "#545333",
				gray1: "#D9D7B6",
				gray4: "#878672",
				gray2: "#FFF8D5",
			},
			spacing: {
				s: "9px",
				m: "18px",
				ml: "27px",
				l: "36px",
				xl: "45px",
				xxl: "54px",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				m: "27px",
			},
			rotate: {
				"135": "135deg",
			},
			textUnderlineOffset: {
				"10": "5px",
			},
			fontSize: {
				base: "1rem",
				h1: "2.25rem",
				h4: "1.77rem",
				h5: "1.2rem",
				h6: "22px",
				small: "0.875rem",
				xsmall: "0.78rem",
			},
			boxShadow: {
				sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
				md: "0 8px 30px rgba(0, 0, 0, 0.12)",
				button: "6px 6px 0px 0px rgba(13, 13, 13, 1);",
				medium: "3px 3px 0px 0px rgba(13, 13, 13, 1);",
			},
			sepia: {
				30: "0.3",
			},
			contrast: {
				12: "1.2",
			},
			brightness: {
				9: "0.9",
			},
			saturate: {
				12: "1.2",
			},
			animation: {
				"fadeIn-fast":
					"fadeIn-fast 0.5s ease-in, translateY-slow 0.5s ease-in-out",
				"fadeIn-medium":
					"fadeIn-medium 0.6s ease-in, translateY-slow 0.6s ease-in-out",
				"fadeIn-slow":
					"fadeIn-slow 0.7s ease-in, translateY-fast 0.7s ease-in-out",
				"opacity-slow": "opacity-slow 0.7s ease-in",
			},
			keyframes: {
				"fadeIn-fast": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fadeIn-medium": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fadeIn-slow": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"translateY-slow": {
					"0%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				"translateY-fast": {
					"0%": { transform: "translateY(-25px)" },
					"100%": { transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
