/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        branco:{
          100: "#EEEEEE",
        }
      },
      backgroundImage: {
        'imagem-assitencia': "url('/assets/conserto-deluna.png')",
        'imagem-manutencao': "url('/assets/manutencao-deluna.jpg')",
        'imagem-desenvolvedor': "url('/assets/web-deluna.jpg')",
        'imagem-tech': "url('/assets/tech-deluna.jpg')",
      }
    },
  },
  plugins: [],
};
