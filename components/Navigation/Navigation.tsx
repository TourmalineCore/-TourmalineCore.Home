import { useTranslation } from 'next-i18next';
import { Link as ScrollLink } from 'react-scroll';

import useOffset from '../../common/hooks/useMyHook';
import { NavigationLinks } from '../../utils/consts/navigation';

function Navigation({
  navigationLinks,
}: {
  navigationLinks: NavigationLinks[];
}) {
  const { t } = useTranslation('navigation');

  const offset = useOffset();

  return (
    <div className="navigation">
      <div className="navigation__line" />
      <div className="navigation__links">
        {navigationLinks.map((link) => (
          <ScrollLink
            key={link}
            className="navigation__link"
            activeClass="navigation__link--active"
            smooth
            spy
            to={link}
            offset={offset}
          >
            {t(link)}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
}

export default Navigation;