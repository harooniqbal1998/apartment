import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				base: "#BACBD9",
				secondary: "#F2CA7E",
				tertiary: "#F2D6B3",
				dark: "#735645",
				white: "#F2F2F2",
			},
		},
	},
	plugins: [],
} satisfies Config;
