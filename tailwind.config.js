/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Fraunces", "serif"],
            },
        },
    },
    plugins: [],
    presets: [require("@relume_io/relume-tailwind")],
}
