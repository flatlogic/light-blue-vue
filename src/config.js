const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://flatlogic-node-backend.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;
const colors = process.env.VUE_APP_THEME === 'light' ? {
  blue: '#196EFF',
  green: '#2ada7a',
  orange: '#ffc107',
  red: '#ff0115',
  purple: '#a700ae',
  dark: '#3c484f',
  teal: '#7f49fa',
  pink: '#e671b8',
  gray: '#d6dee5',
  default: '#e9ecef',
  textColor: '#444',
  gridLineColor: '#444'
} : {
  blue: '#1870DC',
  green: '#58D777',
  orange: '#f0af03',
  red: '#F45722',
  purple: '#474D84',
  dark: '#040620',
  teal: '#14d3d3',
  pink: '#e671b8',
  gray: '#d6dee5',
  default: '#595d78',
  textColor: '#b4b5bf',
  gridLineColor: '#040620'
};

export default {
  theme: process.env.VUE_APP_THEME,
  colors: {
    ...colors,
    white: "#fff"
  },
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
