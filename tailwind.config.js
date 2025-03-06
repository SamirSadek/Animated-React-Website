/** @type {import('tailwindcss').Config} */ 
// This line provides TypeScript support by specifying the type of the Tailwind config object.

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // /* 
  //   The "content" array defines the files Tailwind should scan to generate styles.
  //   - "./index.html" → Includes Tailwind styles in the main HTML file.
  //   - "./src/**/*.{js,ts,jsx,tsx}" → Includes all JavaScript, TypeScript, React (JSX, TSX) files 
  //     inside the "src" folder, ensuring Tailwind only includes styles that are actually used.
  // */

  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"], 
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        /*
          Defines custom fonts that were registered using @font-face.
          - The first value (e.g., "zentry") refers to the custom font name.
          - The second value ("sans-serif") is the fallback font in case the custom font isn't loaded.
        */
      },

      colors: {
        blue: {
          50: "#DFDFF0",  // Lightest blue shade
          75: "#dfdff2",  // Slightly darker than 50
          100: "#F0F2FA", // Very light blue
          200: "#010101", // Black (seems misplaced, should be in 'gray' or 'black')
          300: "#4FB7DD", // Bright blue shade
        },
        violet: {
          300: "#5724ff", // Medium violet
        },
        yellow: {
          100: "#8e983f", // Olive-yellow
          300: "#edff66", // Bright neon yellow
        },
        /*
          Defines custom color shades that can be used in Tailwind classes.
          Example usage:
          - text-blue-50 → Applies the color #DFDFF0 to text
          - bg-yellow-300 → Applies the color #edff66 as a background
        */
      },
    },
  },

  plugins: [],
  /*
    The "plugins" array is empty, meaning no additional Tailwind plugins are used.
    Plugins can be added here to extend Tailwind with extra functionality (e.g., forms, typography).
  */
};
