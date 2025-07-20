import { useState, useEffect } from 'react';
import ProjectShowcase from '../components/hero/Hero';
import GameCard from '../components/game-card/GameCard';
import gamesData from '../data/games.json';
import type { Game } from '../types';

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      // Ensure gamesData.games exists and is an array
      if (gamesData && gamesData.games && Array.isArray(gamesData.games)) {
        setGames(gamesData.games as Game[]);
      } else {
        console.error('Invalid games data structure:', gamesData);
        setGames([]);
      }
    } catch (error) {
      console.error('Error loading games data:', error);
      setGames([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Show loading state if data is not ready
  if (loading) {
    return (
      <div className="home">
        <div className="container pt-4xl">
          <h1 className="heading-1 text-primary">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Project Showcase with Featured Media Background */}
      <ProjectShowcase games={games} />
      
      {/* Games Grid */}
      <section className="container-wide pt-4xl pb-4xl">
        <div className="mb-2xl">
          <h2 className="heading-2 text-primary mb-md">Our Games</h2>
          <p className="body-large text-secondary">
            Discover our collection of innovative and engaging games
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-xl">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 