import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          
          <div className={styles.brandArea}>
            <Link to="/" className={styles.brandLogo} style={{ textDecoration: 'none' }}>
              <span className={styles.brandName}>
                gg<span>Jala</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              Infraestrutura institucional e custódia segura para transações de ativos digitais, contas competitivas, gift cards e computação de IA.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className={styles.trustBadge}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified_user</span>
                Custódia 100% Garantida
              </span>
            </div>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Acesso Rápido</h3>
            <ul className={styles.footerLinks}>
              <li><a className={styles.footerLink} href="#">Catálogo Completo</a></li>
              <li><a className={styles.footerLink} href="#">Mais Vendidos & Drops</a></li>
              <li><a className={styles.footerLink} href="#">Gift Cards Instantâneos</a></li>
              <li><a className={styles.footerLink} href="#">Ferramentas de IA & APIs</a></li>
              <li><a className={styles.footerLink} href="#">Top Vendedores Verificados</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Como Funciona</h3>
            <ul className={styles.footerLinks}>
              <li><a className={styles.footerLink} href="#">Como Comprar</a></li>
              <li><a className={styles.footerLink} href="#">Como Vender seus Ativos</a></li>
              <li><a className={styles.footerLink} href="#">Sistema de Custódia (Escrow)</a></li>
              <li><a className={styles.footerLink} href="#">Taxas & Tiers de Reputação</a></li>
              <li><a className={styles.footerLink} href="#">Central de Ajuda 24/7</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Termos e Segurança</h3>
            <ul className={styles.footerLinks}>
              <li><a className={styles.footerLink} href="#">Termos de Uso</a></li>
              <li><a className={styles.footerLink} href="#">Política de Privacidade</a></li>
              <li><a className={styles.footerLink} href="#">Proteção Antifraude & Reembolso</a></li>
              <li><a className={styles.footerLink} href="#">Diretrizes de Segurança</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentLabel}>Métodos Seguros:</span>
            <div className={styles.paymentBadges}>
              <div className={styles.paymentBadge}>
                <span>PIX Instantâneo</span>
              </div>
            </div>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ggJala Exchange Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
