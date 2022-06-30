import config from '../config'
import chroma from 'chroma-js';

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
};

export const NavbarColorSchemes = {
  LIGHT: "light",
  DARK: "dark",
};

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
};

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar",
};

Object.freeze(NavbarTypes);
Object.freeze(NavbarColorSchemes);
Object.freeze(SidebarTypes);
Object.freeze(LayoutComponents);

function updateRootCss(cssVar, value) {
  document.querySelector('body').setAttribute("class", `light-blue ${cssVar + value}`)
}

export default {
  namespaced: true,
  state: {

    sidebarStatic: false,
    navbarColorScheme: NavbarColorSchemes.LIGHT,
    navbarType: NavbarTypes.STATIC,
    sidebarType: SidebarTypes.SOLID,

    sidebarActiveElement: null,
    helperOpened: false,
    sidebarColorName: config.app.themeColors[0][0],
    navbarColorName: config.app.themeColors[1][0],
  },

  mutations: {
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
    toggleHelper(state, payload) {
      state.helperOpened = payload;
    },
    updateNavbarColor(state, payload) {
      let colorName = payload.color[0];
      let colorValue = payload.color[1];

      localStorage.setItem("theme", colorName)
      state.navbarColorName = colorName;
      updateRootCss('theme--', colorName);
      state.navbarColorScheme = chroma(colorValue).luminance() < 0.4 ? NavbarColorSchemes.DARK : NavbarColorSchemes.LIGHT;
    },
  },
  actions: {
    switchSidebar({ commit }, value) {
      commit('switchSidebar', value);
    },
    changeSidebarActive({ commit }, index) {
      commit('changeSidebarActive', index);
    },
    toggleHelper({commit}, payload) {
      commit('toggleHelper', payload)
    },
    updateLayoutComponentColor({commit}, payload) {
      if (payload.component === LayoutComponents.SIDEBAR) {
        commit('updateSidebarColor', payload)
      } else {
        commit('updateNavbarColor', payload)
      }
    },
  },
};
