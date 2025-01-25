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
      primary:'#FE5F00',
      lightprimary:"#FFF1E8",
      secondary:"#FFF1E8",
      secondary2:"#FFEADC",
      textcolor:"#100C0A",
      bgcolor:'#FFF1E9',
      bordercolor:'#0E0E1026',
      neutral:"#3C3D44",
      neutral2:"#636363",
      neutral3:"#1A1A1A"
      },
      letterSpacing:{
        letterspace:"3%",
        letterspace2:"2%"
      },
      fontSize:{
        fs22:"22px"
      },
      maxWidth:{
        insidecontainer_maxwidth:"83.25rem"
      },
      lineHeight:{
        title_lineheight:"5.625rem"
      },
      boxShadow: {
        'custom-shadow':'0px 4px 50px rgba(0, 0, 0, 0.1)',
        "hover-shadow":'0px 4px 50px rgba(254, 95, 0, 0.2)'
      },
      screens:{
        1440:"1440px"
      }
    },
  },
  plugins: [],
} satisfies Config;
