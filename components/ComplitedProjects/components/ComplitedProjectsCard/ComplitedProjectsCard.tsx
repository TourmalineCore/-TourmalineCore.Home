import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { ComplitedProject } from '../../../../utils/consts/complitedProjects';

function ComplitedProjectsCard({
  complitedProject,
}: {
  complitedProject: ComplitedProject;
}) {
  const { t } = useTranslation('complitedProjects');

  return (
    <a
      href={complitedProject.link}
      target="_blink"
      className="complited-project-card"
    >
      <h3 className="complited-project-card__title">{complitedProject.title}</h3>
      <span className="complited-project-card__description">{t(complitedProject.descriptionName)}</span>
      <div className="ratio ratio--16x9 complited-project-card__image">
        <Image src={`/images/${complitedProject.image}.png`} layout="fill" />
      </div>
      <span className="complited-project-card__link">
        {t('goToProject')}
        <span className="complited-project-card__arrow" />
      </span>
    </a>
  );
}

export default ComplitedProjectsCard;
