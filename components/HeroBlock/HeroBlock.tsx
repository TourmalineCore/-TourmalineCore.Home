function HeroBlock({
  title,
  gradientTitle,
  description,
  Button,
}: {
  title: string,
  gradientTitle: string,
  description: string,
  Button: JSX.Element;
}) {
  return (
    <section className="section hero-block">
      <div className="container hero-block__wrapper">
        <div className="hero-block__inner">
          <h1 className="title-type-1">
            {title}
            <span className="hero-block__gradient-title">{gradientTitle}</span>
          </h1>
          <div className="title-type-4 hero-block__description">{description}</div>

          {Button}

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
}

export default HeroBlock;
