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
				 
			},
			spacing: {
				s: "8px",
				m: "16px",
				ml: "32px",
				l: "48px",
				xl: "80px",
				xxl: "124px",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				m: "27px",
			},
			textUnderlineOffset: {
				"10": "5px",
			},
			fontSize: {
				base: "1rem",
				heading: "4rem"
			},
			boxShadow: {
				sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
				md: "0 8px 30px rgba(0, 0, 0, 0.12)",
				button: "6px 6px 0px 0px rgba(13, 13, 13, 1);",
				medium: "3px 3px 0px 0px rgba(13, 13, 13, 1);",
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
