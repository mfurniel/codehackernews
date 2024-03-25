import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const browserLanguage = navigator.language || navigator.userLanguage;

const messages = {
    en: require('../i18n/messages_en.json'),
    es: require('../i18n/messages_es.json'),
};

const i18n = new VueI18n({
    locale: browserLanguage,
    fallbackLocale: 'en',
    messages
});

export default i18n;