import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ tag, title, subtitle, image, tagColor = 'primary' }) => {
  return (
    <a className={styles.card} href="#">
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className={styles.content}>
        <span 
          className={styles.tag} 
          style={{ color: `var(--color-${tagColor})` }}
        >
          {tag}
        </span>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </a>
  );
};

export default CategoryCard;
