const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://sing-generator-node.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/light-blue-vue" : "https://demo.flatlogic.com/light-blue-vue/";

const colors = {
  blue: '#3979f6',
  green: '#47822B',
  orange: '#da9734',
  red: '#c93c3c',
  purple: '#a700ae',
  dark: '#040620',
  teal: '#4179CF',
  pink: '#e671b8',
  gray: '#d6dee5',
  default: '#474D84',
  textColor: '#b4b5bf',
  gridLineColor: '#040620'
};



const app = {
  themeColors: [
    ['dark', "#333964"],
    ['light', "#0A0417"],
    ['sea', "#4A4657"],
    ['sky', "#3A3847"],
    ['rain', "#3846AA"],
    ['middle', "#3390C3"],

    // ['default','#002B49'],
    // ['white', '#FFFFFF'],
    // ['first','#004472'],
    // ['second','#e9ebef'],
    // ['third','#d1e7f5'],
    // ['fourth','#ccdde9'],
    // ['fifth','#d6dfe6'],
    // ['sixth','#13191d'],
    // ['seventh','#20ae8c'],
  ],
}

export default {
  colors: {
    ...colors,
    white: "#fff"
  },
  app,
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: process.env.VUE_APP_BACKEND,
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password'
  }
};
