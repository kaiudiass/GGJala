import React from 'react';
import styles from './Example.module.css';

const Example = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Exemplo de Componente</h2>
      <p className={styles.text}>Este componente usa CSS Module puro para estilização.</p>
    </div>
  );
};

export default Example;
