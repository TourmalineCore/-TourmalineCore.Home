import { useTranslation } from 'next-i18next';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

function HeroBlock() {
  const { t } = useTranslation('heroBlock');

  return (
    <section className="section hero-block">
      <div className="container hero-block__wrapper">
        <div className="hero-block__inner">
          <h1 className="title-type-1">
            {t('title')}
            <span className="hero-block__gradient-title">{t('gradientTitle')}</span>
          </h1>
          <div className="title-type-4 hero-block__description">{t('description')}</div>

          <SecondaryButton onClick={scrollFirstBlock} text={t('buttonText')} />
        </div>
        <div className="hero-block__video">
          <video poster="/images/tourmaline-core-poster.png" src="/images/video.mp4" autoPlay loop playsInline muted>
            <source src="video.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </section>
  );

  function scrollFirstBlock() {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}

export default HeroBlock;
