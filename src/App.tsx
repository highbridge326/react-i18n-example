import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import ja from './locale/ja.json';
import en from './locale/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    returnEmptyString: false,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const App: React.FC = () => {
  const { t } = useTranslation();
  const onClickChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en');
  };

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
      <button onClick={onClickChangeLanguage}>
        {i18n.language === 'en' ? 'ja' : 'en'}
      </button>
    </div>
  );
};

export default App;
