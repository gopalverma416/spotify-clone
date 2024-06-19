/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = ['eslint-plugin-react-compiler',];
export const rules = {
  'react-compiler/react-compiler': "error",
};