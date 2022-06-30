import { LayoutComponents } from '@/store/layout';
import config from "../config";

export default {
  data: () => {
    return {
      appConfig: {
        themeColors: config.app.themeColors,
        colors: config.colors,
        layoutComponents: LayoutComponents,
      }
    }
  },
  methods: {
    decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
