import { useEffect, useState } from 'react';
import { Play, ArrowRight, ExternalLink, Download } from 'lucide-react';
import type { HeroProps } from '../../types';
import Carousel from '../Carousel/Carousel';
import type { CarouselItem } from '../Carousel/Carousel';
import styles from './Hero.module.css';

const ProjectShowcase: React.FC<HeroProps> = ({ games }) => {
  // Don't render if games array is empty or undefined
  if (!games || games.length === 0) {
    return (
      <section className={styles.projectShowcase}>
        <div className={styles.backgroundContainer}>
          <div className={styles.backgroundImage} />
          <div className={styles.backgroundOverlay}></div>
        </div>
        <div className="container-wide">
          <div className={styles.showcaseContent}>
            <div className={styles.projectInfo}>
              <h1 className={`${styles.projectTitle} heading-1 mb-lg`}>
                Loading Projects...
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Convert games to carousel items
  const carouselItems: CarouselItem[] = games.map((game, index) => {
    // Get icon component based on game type or default
    const getIconComponent = (): React.JSX.Element => {
      if (game.platforms?.includes('Steam')) {
        return <Play size={20} />;
      } else if (game.platforms?.includes('iOS') || game.platforms?.includes('Android')) {
        return <Download size={20} />;
      } else {
        return <ArrowRight size={20} />;
      }
    };

    return {
      title: game.title,
      description: game.shortDescription || game.longDescription,
      id: index,
      icon: getIconComponent(),
    };
  });

  return (
    <section className={styles.projectShowcase}>
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage} />
        <div className={styles.backgroundOverlay}></div>
      </div>
      
      <div className="container-wide">
        <div className={styles.showcaseContent}>
          <div className={styles.projectInfo}>
            <h1 className={`${styles.projectTitle} heading-1 mb-lg`}>
              Featured Games
            </h1>
            <p className={`${styles.projectDescription} body-large text-secondary mb-xl`}>
              Discover our latest and greatest game projects
            </p>
          </div>
          
          {/* React Bits Carousel */}
          <div className={styles.carouselWrapper}>
            <Carousel
              items={carouselItems}
              baseWidth={400}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 