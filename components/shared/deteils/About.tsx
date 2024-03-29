import TabListAbout from './TabListAbout';
import DeteilsSectionContainer from '@/components/DeteilsSectionContainer';

export default function About() {
  return (
    <DeteilsSectionContainer>
      <TabListAbout aboutData={aboutData} />
    </DeteilsSectionContainer>
  );
}

const aboutData = [
  {
    id: '1',
    label: 'ABOUT',
    content: {
      title: 'About the client',
      discription:
        'Andersen has provided a manufacturer of skin-care products with a revolutionary tool that helps in diagnosing skin conditions and related diseases with a further treatment routine offered.',
      images: [
        'https://static.andersenlab.com/andersenlab/new-andersensite/bg-for-blocks/about-the-client/france-desktop-2x.png',
      ],
      location:
        'https://static.andersenlab.com/andersenlab/new-andersensite/bg-for-blocks/about-the-client/france-desktop-2x.png',
    },
  },
  {
    id: '2',
    label: 'BUSINESS ANALYSIS',
    content: {
      title: 'Project overview',
      discription:
        'Andersen has provided a manufacturer of skin-care products with a revolutionary tool that helps in diagnosing skin conditions and related diseases with a further treatment routine offered.',
      images: [
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.6.desktop.jpg',
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.2.desktop.jpg',
        'https://static.andersenlab.com/andersenlab/new-and-ersensite/cases/universkin/2.1.3.desktop.jpg',
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.4.desktop.jpg',
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.5.desktop.jpg',
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.6.desktop.jpg',
      ],
      location:
        'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/2.1.6.desktop.jpg',
    },
  },
];
