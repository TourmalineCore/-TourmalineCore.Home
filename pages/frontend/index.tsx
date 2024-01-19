import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import HeroBlockTechnology from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import Points from '../../components/Points/Points';

export default function FrontendPage() {
  return (
    <>
      {/* TODO Добавить перевод */}
      <PageHead
        seoData={{
          seo: {
            title: 'Tourmaline Core | Frontend',
            description: 'Description',
          },
          keywords: 'разработка, корпоративные информационные системы, публичные сайты',
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />
      <Layout>
        {/* TODO add data from json */}
        <div className="frontend__hero-block-container">
          <HeroBlockTechnology title="Frontend разработка" description="Разработка сайтов и веб-приложений на React, TypeScript и не только" />
          <Points />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'articles',
      'footer',
      'heroBlockHomePage',
      'skills',
      'services',
      'completedProjects',
      'navigation',
      'workStructure',
      'mistakes',
      'cookie',
      'adaptationToProject',
      'process',
      'tools',
      'form',
      'formBlock',
      'discussion',
    ])),
  },
});
