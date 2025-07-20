import { Link } from 'react-router-dom';
import type { GameCardProps } from '../../types';
import styles from './GameCard.module.css';

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className={styles.gameCard}>
      <div className={styles.cardImage}>
        {game.featuredMedia && game.featuredMedia.url ? (
          <img 
            src={game.featuredMedia.url} 
            alt={game.featuredMedia.alt || game.title}
            className={styles.gameImage}
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
            className={styles.imagePlaceholder}
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
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className="heading-5 text-primary mb-sm">{game.title}</h3>
        </div>
        
        <p className="body-small text-secondary mb-md">{game.shortDescription}</p>
        
        <div className={styles.cardMeta}>
          <div className={styles.metaItem}>
            <span className="caption text-muted">Genre</span>
            <span className="body-small text-primary">{game.genre}</span>
          </div>
          <div className={styles.metaItem}>
            <span className="caption text-muted">Platforms</span>
            <div className={styles.platforms}>
              {game.platforms.slice(0, 2).map((platform) => (
                <span key={platform} className={styles.platform}>
                  {platform}
                </span>
              ))}
              {game.platforms.length > 2 && (
                <span className={styles.platformMore}>+{game.platforms.length - 2}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard; 