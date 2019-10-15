const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://flatlogic-node-backend.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;
const chartColors = process.env.VUE_APP_THEME === 'light' ? {
  blue: '#196EFF',
  green: '#2ada7a',
  orange: '#ffc107',
  red: '#ff0115',
  purple: '#a700ae',
  dark: '#3c484f',
  teal: '#7f49fa',
  pink: '#e671b8',
  gray: '#d6dee5',
  textColor: '#444'
} : {
  blue: '#2e74e3',
  green: '#25b932',
  orange: '#f0af03',
  red: '#db4a00',
  purple: '#a700ae',
  dark: '#3c484f',
  teal: '#14d3d3',
  pink: '#e671b8',
  gray: '#d6dee5',
  textColor: '#fff'
};

export default {
  theme: process.env.VUE_APP_THEME,
  chartColors,
  hostApi,
  portApi,
  baseURLApi,
  remote: "https://flatlogic-node-backend.herokuapp.com",
  isBackend: process.env.VUE_APP_BACKEND,
  auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
  }
};