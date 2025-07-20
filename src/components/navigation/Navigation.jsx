import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Games', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  return (
    <nav className={styles.navigation}>
      <div className="container">
        <ul className={`${styles.navList} flex items-center gap-lg`}>
          {navItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    isActive ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 