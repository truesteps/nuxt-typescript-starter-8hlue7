import { I18nOptions } from 'vue-i18n';

export default (): I18nOptions => ({
  fallbackLocale: 'en',

  pluralizationRules: {
    cs(choice: number) {
      // this === VueI18n instance, so the locale property also exists here
      if (choice === 0) {
        return 0;
      }

      if (choice === 1) {
        return 1;
      }

      if (choice > 1 && choice < 5) {
        return 2;
      }

      return 3;
    },
  },
});
