import { useState, useEffect, useRef } from 'react';

import { Play, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';
import type { HeroProps } from '../../types';
import styles from './Hero.module.css';

const ProjectShowcase: React.FC<HeroProps> = ({ games }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const currentGame = games[currentIndex];

  // Fallback for missing featured media
  const getBackgroundImage = (game: any): string => {
    if (game.featuredMedia && game.featuredMedia.url) {
      return `url(${game.featuredMedia.url})`;
    }
    // Fallback to a gradient background if no image
    return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  // Get icon component based on icon name
  const getIconComponent = (iconName: string): React.JSX.Element => {
    switch (iconName) {
      case 'play':
        return <Play size={20} />;
      case 'arrow-right':
        return <ArrowRight size={20} />;
      case 'external-link':
        return <ExternalLink size={20} />;
      case 'download':
        return <Download size={20} />;
      default:
        return <ArrowRight size={20} />;
    }
  };

  // Get button CSS class based on type
  const getButtonClass = (type: string): string => {
    switch (type) {
      case 'steam':
        return styles.steamButton;
      case 'appstore':
        return styles.appStoreButton;
      case 'playstore':
        return styles.playStoreButton;
      case 'custom':
        return styles.customButton;
      case 'learn':
        return styles.learnButton;
      default:
        return styles.learnButton;
    }
  };

  // Scroll selected thumbnail into view
  const scrollToSelectedThumbnail = (index: number): void => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const thumbnails = container.querySelectorAll(`.${styles.projectCard}`);
      const selectedThumbnail = thumbnails[index] as HTMLElement;
      
      if (selectedThumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailWidth = selectedThumbnail.offsetWidth;
        const thumbnailLeft = selectedThumbnail.offsetLeft;
        
        // Calculate the center position
        const centerPosition = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        // Smooth scroll to center the selected thumbnail
        container.scrollTo({
          left: centerPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const nextSlide = (): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (currentIndex + 1) % games.length;
      setCurrentIndex(newIndex);
      setProgress(0);
      setTimeout(() => {
        setIsTransitioning(false);
        scrollToSelectedThumbnail(newIndex);
      }, 300);
    }
  };

  const prevSlide = (): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (currentIndex - 1 + games.length) % games.length;
      setCurrentIndex(newIndex);
      setProgress(0);
      setTimeout(() => {
        setIsTransitioning(false);
        scrollToSelectedThumbnail(newIndex);
      }, 300);
    }
  };

  // Auto-advance carousel every 5 seconds with progress tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms (5 seconds total)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  // Scroll to selected thumbnail when currentIndex changes
  useEffect(() => {
    if (games.length > 0) {
      scrollToSelectedThumbnail(currentIndex);
    }
  }, [currentIndex, games.length]);

  return (
    <section className={styles.projectShowcase}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Featured Media Background */}
        <div className={styles.backgroundContainer}>
          <div 
            className={`${styles.backgroundImage} ${isTransitioning ? styles.transitioning : ''}`}
            style={{
              backgroundImage: getBackgroundImage(currentGame)
            }}
          />
        </div>

        {/* Project Banner */}
        <div className={styles.projectBanner}>
          <div className="container-wide">
            <div className={styles.bannerContent}>
              {/* 1. Status - Subtitle Size */}
              <div className={styles.projectStatus}>
                <span className={styles.status}>
                  {currentGame.status || `No Status (ID: ${currentGame.id})`}
                </span>
              </div>
              
              {/* 2. Title - Main Title Size */}
              <h1 className={`${styles.projectTitle} heading-1 mb-lg`}>
                {currentGame.title}
              </h1>
              
              {/* 3. Description - Body Text Size */}
              <p className={`${styles.projectDescription} body-large text-secondary mb-xl`}>
                {currentGame.longDescription}
              </p>
              
              {/* 4. Navigation Buttons */}
              <div className={`${styles.projectActions} flex items-center gap-md`}>
                {currentGame.navigationButtons && currentGame.navigationButtons.length > 0 ? (
                  currentGame.navigationButtons.map((button, index) => (
                    <a
                      key={index}
                      href={button.url}
                      target={button.type === 'learn' ? '_self' : '_blank'}
                      rel={button.type === 'learn' ? '' : 'noopener noreferrer'}
                      className={`${styles.navigationButton} ${getButtonClass(button.type)} flex items-center gap-sm`}
                    >
                      {getIconComponent(button.icon)}
                      {button.text}
                    </a>
                  ))
                ) : (
                  // Fallback button if no navigationButtons defined
                  <a
                    href={`/game/${currentGame.id}`}
                    className={`${styles.navigationButton} ${styles.learnButton} flex items-center gap-sm`}
                  >
                    <ArrowRight size={20} />
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className={styles.carouselContainer}>
        <div className="container-wide">
          <div className={styles.carouselContent}>
            {/* Navigation Buttons - Left */}
            <button 
              onClick={prevSlide}
              className={`${styles.navButton} ${styles.prevButton}`}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Project Cards */}
            <div className={styles.projectCards} ref={carouselRef}>
              {games.map((game, index) => (
                <div 
                  key={game.id}
                  className={`${styles.projectCard} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setProgress(0);
                    scrollToSelectedThumbnail(index);
                  }}
                >
                  <div className={styles.cardImage}>
                    {game.featuredMedia && game.featuredMedia.url ? (
                      <img 
                        src={game.featuredMedia.url} 
                        alt={game.featuredMedia.alt || game.title}
                        className={styles.cardImage}
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement as HTMLElement;
                          if (parent) {
                            parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                          }
                        }}
                      />
                    ) : (
                      <div 
                        className={styles.cardImage}
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        {game.title}
                      </div>
                    )}
                    <div className={styles.cardOverlay}></div>
                    
                    {/* Progress Bar for Active Card */}
                    {index === currentIndex && (
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Right */}
            <button 
              onClick={nextSlide}
              className={`${styles.navButton} ${styles.nextButton}`}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 