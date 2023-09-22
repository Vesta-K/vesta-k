/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import plugin from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-var-requires

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: "url('images/checkmark.svg')",
      },
      fontFamily: {
        primary: ["Inter"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilites }) {
      addUtilites({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    }),
  ],
});
