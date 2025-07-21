import { useEffect, useState } from 'react';
import contactData from '../data/contact.json';
import styles from '../styles/Contact.module.css';
import { Mail, Instagram } from 'lucide-react';

const DiscordIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.084.084 0 0 0-.09.042c-.388.695-.822 1.596-1.13 2.304a18.524 18.524 0 0 0-5.41 0 12.51 12.51 0 0 0-1.13-2.304.084.084 0 0 0-.09-.042A19.736 19.736 0 0 0 3.683 4.369a.077.077 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.087.087 0 0 0 .031.057c2.128 1.565 4.195 2.51 6.222 3.155a.084.084 0 0 0 .091-.027c.48-.66.908-1.356 1.273-2.084a.076.076 0 0 0-.041-.104c-.676-.256-1.32-.568-1.943-.936a.077.077 0 0 1-.008-.127c.13-.098.26-.2.382-.304a.08.08 0 0 1 .082-.01c4.053 1.853 8.418 1.853 12.451 0a.08.08 0 0 1 .083.009c.123.104.253.206.383.304a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.944.936.076.076 0 0 0-.04.105c.366.728.794 1.424 1.273 2.084a.084.084 0 0 0 .091.028c2.027-.645 4.094-1.59 6.222-3.155a.077.077 0 0 0 .031-.057c.5-5.177-.838-9.637-3.549-13.625a.077.077 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={32} />,
  instagram: <Instagram size={32} />,
  discord: <DiscordIcon />,
};

const Contact: React.FC = () => {
  const [methods, setMethods] = useState<any[]>([]);

  useEffect(() => {
    setMethods(contactData.methods);
  }, []);

  return (
    <div className={styles.contactPage}>
      <div className={styles.background} />
      <div className={styles.contentWrapper}>
        <h1 className={styles.intro}>{contactData.intro}</h1>
        <div className={styles.cardsGrid}>
          {methods.map((method) => (
            <div className={styles.card} key={method.type}>
              <div className={styles.icon}>{iconMap[method.icon]}</div>
              <h2 className={styles.label}>{method.label}</h2>
              <p className={styles.description}>{method.description}</p>
              <a
                className={styles.button}
                href={method.link}
                target={method.type === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {method.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact; 