import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import gamesData from '../data/games.json';
import type { Game } from '../types';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const foundGame = gamesData.games.find(g => g.id === id) as Game | undefined;
    setGame(foundGame || null);
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
        <p className="body-large text-secondary mb-lg">{game.longDescription}</p>
        
        <div className="flex items-center gap-lg mb-xl">
          <span className="body text-primary">{game.genre}</span>
          <span className="body text-muted">•</span>
          <span className="body text-primary">{game.status}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-md">
          {game.navigationButtons.map((button) => (
            <a
              key={button.text}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-sm px-lg py-md bg-primary text-background rounded-lg font-semibold transition-all hover:scale-105"
            >
              <ExternalLink size={16} />
              {button.text}
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
            <p className="body text-secondary mb-lg">{game.longDescription}</p>
            
            <h3 className="heading-4 text-primary mb-md">Key Features</h3>
            <ul className="space-y-sm">
              <li className="flex items-center gap-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="body text-secondary">Immersive gameplay experience</span>
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="body text-secondary">Stunning visuals and effects</span>
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="body text-secondary">Engaging storyline</span>
              </li>
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
                <span className="body-small text-muted">Status</span>
                <span className="body-small text-primary">{game.status}</span>
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
        </div>
      </div>
    </div>
  );
};

export default GameDetail; 