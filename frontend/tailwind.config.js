/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          
          "primary": "#6CB4EE",
          
          "secondary": "#ff9b54",
                   
          "accent": "#FFD700",
          "orange": "#FFD700",
                   
          
          "neutral": "#252D41",
          
          "base-100": "#2F3337",
                   
          "info": "#3F80CA",
                   
          
          "success": "#35D073",
                   
          "warning": "#CA9D16",
                   
          "error": "#E6403D",
            },
          },
        ],
      },
  
}