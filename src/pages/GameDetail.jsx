import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import gamesData from '../data/games.json';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const foundGame = gamesData.games.find(g => g.id === id);
    setGame(foundGame);
  }, [id]);

  if (!game) {
    return (
      <div className="container pt-3xl">
        <div className="text-center">
          <h1 className="heading-2 text-primary mb-md">Game Not Found</h1>
          <p className="body-large text-secondary mb-xl">
            The game you're looking for doesn't exist.
          </p>
          <Link to="/" className="text-link">
            <ArrowLeft size={16} className="inline mr-xs" />
            Back to Games
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} className="text-accent fill-accent" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" size={20} className="text-accent fill-accent opacity-70" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} className="text-border" />);
    }
    
    return stars;
  };

  return (
    <div className="container pt-3xl pb-4xl">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-sm text-link mb-xl">
        <ArrowLeft size={20} />
        Back to Games
      </Link>

      {/* Game Header */}
      <div className="mb-3xl">
        <h1 className="heading-1 text-primary mb-md">{game.title}</h1>
        <p className="body-large text-secondary mb-lg">{game.description}</p>
        
        <div className="flex items-center gap-lg mb-xl">
          <div className="flex items-center gap-sm">
            {renderStars(game.rating)}
            <span className="body text-muted">({game.rating})</span>
          </div>
          <span className="body text-muted">•</span>
          <span className="body text-primary">{game.genre}</span>
          <span className="body text-muted">•</span>
          <span className="body text-primary">{game.playTime}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-md">
          {Object.entries(game.links).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-sm px-lg py-md bg-primary text-background rounded-lg font-semibold transition-all hover:scale-105"
            >
              <ExternalLink size={16} />
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Game Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3xl">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-border rounded-xl p-xl mb-xl">
            <h2 className="heading-3 text-primary mb-lg">About This Game</h2>
            <p className="body text-secondary mb-lg">{game.description}</p>
            
            <h3 className="heading-4 text-primary mb-md">Key Features</h3>
            <ul className="space-y-sm">
              {game.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="body text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-xl">
          {/* Game Info */}
          <div className="bg-surface border border-border rounded-xl p-lg">
            <h3 className="heading-4 text-primary mb-md">Game Information</h3>
            <div className="space-y-sm">
              <div className="flex justify-between">
                <span className="body-small text-muted">Release Date</span>
                <span className="body-small text-primary">
                  {new Date(game.releaseDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="body-small text-muted">Genre</span>
                <span className="body-small text-primary">{game.genre}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-small text-muted">Play Time</span>
                <span className="body-small text-primary">{game.playTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-small text-muted">Rating</span>
                <span className="body-small text-primary">{game.rating}/5</span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="bg-surface border border-border rounded-xl p-lg">
            <h3 className="heading-4 text-primary mb-md">Available On</h3>
            <div className="flex flex-wrap gap-sm">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-sm py-xs bg-surface-light border border-border rounded text-sm text-secondary"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-surface border border-border rounded-xl p-lg">
            <h3 className="heading-4 text-primary mb-md">Tags</h3>
            <div className="flex flex-wrap gap-sm">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-sm py-xs bg-surface-light border border-border rounded text-sm text-secondary lowercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail; 