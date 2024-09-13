/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
            colors: {
            'sort': '#1A1A1A',
            'hvid': '#F4F4F4',
            'grøn': '#CDF545',
            'orange': '#FED12E',
            'pink': '#FEB3D2',
            'lilla': '#7E86FF',
            'blå': '#36B7FF',
          },},
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
