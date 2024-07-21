/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('https://sura.stanford.edu/sites/g/files/sbiybj29826/files/styles/card_1900x950/public/media/image/dsc_0724-1-min.jpg')",
        "bulb": "url('https://media.istockphoto.com/id/1428194995/vector/idea-concept-with-one-line-bulbs-innovation-idea-process-of-untangling-wire-to-supply.jpg')",
        "teacher": "url('https://blog.gale.com/wp-content/uploads/2023/02/iStock-1279151428-1.jpg')",
        "support": "url('https://bbk12e1-cdn.myschoolcdn.com/783/photo/orig_photo1910503_10143929.jpg?')",
        "community": "url('https://img.freepik.com/free-photo/people-working-tech-brand-together_23-2150966134.jpg')",
        "inclusivity": "url('https://mintra.com/assets/miscellaneous/Driving-Innovation-in-an-Immersive-Learning-Landscape-wide2.jpg')",
        "improvement": "url('https://www.pentonix.co.in/wp-content/uploads/2024/04/43175.webp')",
      }
    },
  },
  plugins: [],
}