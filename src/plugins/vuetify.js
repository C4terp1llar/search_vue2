import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from "vuetify";
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const opts = {
    theme: {
        dark: true, // поставил темную тему
    },
    icons: {
        iconfont: 'mdi',
    },
};

export default new Vuetify(opts);