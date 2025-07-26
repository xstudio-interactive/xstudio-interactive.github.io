import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gamesData from '../data/games.json';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import BounceCards from '../components/BounceCards/BounceCards';
import FlyingPosters from '../components/FlyingPosters/FlyingPosters';
import MagicBento from '../components/MagicBento/MagicBento';
import ScrollReveal from '../TextAnimations/ScrollReveal/ScrollReveal';
import GradientText from '../TextAnimations/GradientText/GradientText';
import GlareHover from '../Animations/GlareHover/GlareHover';
import Magnet from '../Animations/Magnet/Magnet';
import './Home.css';

const Home = () => {
  const [featuredGame, setFeaturedGame] = useState(gamesData.games[0]);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  // Auto-rotate featured game
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prev) => (prev + 1) % gamesData.games.length);
      setFeaturedGame(gamesData.games[(currentGameIndex + 1) % gamesData.games.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentGameIndex]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <ScrollReveal>
            <GradientText className="studio-title">
              XSTUDIO INTERACTIVE
            </GradientText>
          </ScrollReveal>
          
          <ScrollReveal>
            <h2 className="hero-subtitle">
              Crafting Epic Gaming Experiences
            </h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <p className="hero-description">
              From neon-lit cyberpunk worlds to infinite space exploration, 
              we create games that push boundaries and ignite imaginations.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="hero-buttons">
              <Magnet>
                <Link to="/contact" className="cta-button primary">
                  <GlareHover>
                    <span>Join Our Universe</span>
                  </GlareHover>
                </Link>
              </Magnet>
              
              <Magnet>
                <Link to="#games" className="cta-button secondary">
                  <GlareHover>
                    <span>Explore Games</span>
                  </GlareHover>
                </Link>
              </Magnet>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Game Section */}
      <section className="featured-section">
        <ScrollReveal>
          <h2 className="section-title">Featured Game</h2>
        </ScrollReveal>
        
        <div className="featured-game">
          <SpotlightCard
            className="featured-spotlight"
            children={
              <div className="featured-content">
                <div className="featured-image">
                  <img 
                    src={featuredGame.featuredMedia.url} 
                    alt={featuredGame.featuredMedia.alt}
                    className="game-hero-image"
                  />
                  <div className="featured-overlay">
                    <div className="featured-info">
                      <h3 className="featured-title">{featuredGame.title}</h3>
                      <p className="featured-description">{featuredGame.shortDescription}</p>
                      <div className="featured-meta">
                        <span className="genre-badge">{featuredGame.genre}</span>
                        <span className="status-badge">{featuredGame.status}</span>
                      </div>
                      <Link to={`/game/${featuredGame.id}`} className="featured-cta">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Games Grid Section */}
      <section id="games" className="games-section">
        <ScrollReveal>
          <h2 className="section-title">Our Games Universe</h2>
        </ScrollReveal>
        
                 <div className="games-grid">
           <FlyingPosters>
             {gamesData.games.map((game, index) => (
               <div key={game.id} className="game-poster">
                 <div className="game-card">
                   <div className="game-card-image">
                     <img 
                       src={game.featuredMedia.url} 
                       alt={game.featuredMedia.alt}
                     />
                     <div className="game-card-overlay">
                       <div className="game-card-content">
                         <h3>{game.title}</h3>
                         <p>{game.shortDescription}</p>
                         <div className="game-card-meta">
                           <span className="genre">{game.genre}</span>
                           <span className="status">{game.status}</span>
                         </div>
                         <Link to={`/game/${game.id}`} className="game-card-link">
                           Learn More
                         </Link>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </FlyingPosters>
         </div>
      </section>

      {/* Studio Showcase */}
      <section className="studio-section">
        <ScrollReveal>
          <h2 className="section-title">Why Choose XStudio?</h2>
        </ScrollReveal>
        
                 <div className="studio-showcase">
           <div className="bento-item innovation">
             <h3>Innovation First</h3>
             <p>Pushing the boundaries of what's possible in gaming</p>
           </div>
           
           <div className="bento-item quality">
             <h3>Quality Craftsmanship</h3>
             <p>Every pixel, every line of code crafted with care</p>
           </div>
           
           <div className="bento-item community">
             <h3>Community Driven</h3>
             <p>Your feedback shapes our games and our future</p>
           </div>
           
           <div className="bento-item passion">
             <h3>Passion for Gaming</h3>
             <p>We're gamers making games for gamers</p>
           </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <ScrollReveal>
          <div className="cta-content">
            <h2>Ready to Play?</h2>
            <p>Join thousands of players already enjoying our games</p>
            <div className="cta-buttons">
              <Magnet>
                <Link to="/contact" className="cta-button primary">
                  <GlareHover>
                    <span>Get in Touch</span>
                  </GlareHover>
                </Link>
              </Magnet>
              
              <Magnet>
                <a href="#games" className="cta-button secondary">
                  <GlareHover>
                    <span>Browse Games</span>
                  </GlareHover>
                </a>
              </Magnet>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home; 