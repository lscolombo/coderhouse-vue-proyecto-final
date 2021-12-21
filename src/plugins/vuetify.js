import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                primary: '#00586F',
                secondary: '#b0bec5',
                accent: '#EB8E45',
                error: '#b71c1c',
            },
            dark: {
                dark: true,
                primary: '#00586F',
                secondary: '#EB8E45',
                accent: '#000000'
            }
        }
    }
});
