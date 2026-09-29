import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MarketplaceCard.module.css';

const MarketplaceCard = ({ product }) => {
  const { categoryTag, title, image, price, priceLabel, seller } = product;

  return (
    <Link className={styles.card} to={`/product/${product.id || 1}`}>
      <div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={title} />
          <div className={styles.tagsWrapper}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.categoryTagWrapper}>
            <span className={styles.categoryTag}>{categoryTag}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          
          <div className={styles.sellerInfo}>
            <div className={styles.sellerProfile}>
              <div className={styles.sellerAvatar}>{seller.initials}</div>
              <span className={styles.sellerName}>{seller.name}</span>
              <span className={`material-symbols-outlined ${styles.verifiedIcon}`} title="Vendedor Verificado">check_circle</span>
            </div>
            <div className={styles.rating}>
              <span className={`material-symbols-outlined ${styles.ratingIcon}`}>star</span>
              <span>{seller.rating} ({seller.reviews})</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <span className={styles.priceLabel}>{priceLabel}</span>
          <span className={styles.priceValue}>{price}</span>
        </div>
        <div className={styles.buyButton}>Comprar</div>
      </div>
    </Link>
  );
};

export default MarketplaceCard;
