/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('https://sura.stanford.edu/sites/g/files/sbiybj29826/files/styles/card_1900x950/public/media/image/dsc_0724-1-min.jpg?h=790be497&itok=BPgryEVi')"
      }
    },
  },
  plugins: [],
}