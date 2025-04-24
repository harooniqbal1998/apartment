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
				background: "#edeec9",
				secondary: "#bfd8bd",
				foreground: "var(--foreground)",
				base: "#f4e285",
				tertiary: "#bfd8bd",
				fourth: "#98c9a3",
				fifth: "#77bfa3",
			},
		},
	},
	plugins: [],
} satisfies Config;
