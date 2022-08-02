import IconRussianFlag from '../../icons/flag-for-russia.svg';
import IconUSAFlag from '../../icons/flag-for-united-states.svg';

type Languages = {
  [key: string]: {
    name: string;
    shortName: string,
    icon: () => JSX.Element;
  }
};

export const languages: Languages = {
  en: {
    name: 'English',
    shortName: 'en',
    icon: () => <IconUSAFlag className="lang-switch__icon" />,
  },
  ru: {
    name: 'Русский',
    shortName: 'рус',
    icon: () => <IconRussianFlag className="lang-switch__icon" />,
  },
  zh: {
    name: '中文',
    shortName: '中文',
    icon: () => <IconRussianFlag className="lang-switch__icon" />,
  },
};
