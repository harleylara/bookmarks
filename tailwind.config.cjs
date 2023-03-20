/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                'dark-50': '#131313'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
