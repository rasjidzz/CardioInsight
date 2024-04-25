/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/app.blade.php}",
        "./resources/js/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-green": "#428C97",
            },
            fontFamily: {
                kaisei: "Kaisei Decol, serif",
                kanit: "Kanit, sans-serif",
            },
        },
    },
    plugins: [],
};
