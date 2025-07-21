import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavItem {
  path: string;
  label: string;
  exact: boolean;
}

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
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