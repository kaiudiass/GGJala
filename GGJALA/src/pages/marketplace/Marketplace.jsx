import React from 'react';
import styles from './Marketplace.module.css';
import CategoryCard from '../../components/marketplace/CategoryCard/CategoryCard';
import MarketplaceCard from '../../components/marketplace/MarketplaceCard/MarketplaceCard';
import { categories, featuredProducts, valorantProducts, minecraftProducts, robloxProducts, leagueProducts } from '../../mocks/marketplace';

const Marketplace = () => {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGlow1}></div>
        <div className={styles.heroGlow2}></div>
        <div className={styles.heroGlow3}></div>

        <div className={styles.heroContainer}>
      

          <div style={{ marginBottom: '1.5rem', maxWidth: '56rem' }}>
            <div className={styles.heroTitle}>
              <span className={styles.heroTitleVariant}>[ </span>
              <span className={styles.heroTitlePrimary}>comprar e vender</span>
              <span className={styles.heroTitleVariant}> ]</span>
            </div>
            <p className={styles.heroDescription}>
              Contas verificadas, gift cards, moedas in-game, chaves de ativação e instâncias de IA com <span style={{ color: 'var(--color-on-surface)', fontWeight: '600' }}>proteção escrow institucional</span> e entrega imediata.
            </p>
          </div>

          <div className={styles.heroSearch}>
            <div className={styles.heroSearchInner}>
              <span className="material-symbols-outlined" style={{ marginLeft: '12px', color: 'var(--color-on-surface-variant)', fontSize: '22px' }}>search</span>
              <input 
                className={styles.heroSearchInput}
                placeholder="O que você deseja comprar hoje? (Ex: 'Conta Valorant', 'Robux', 'Gemini Pro')"
                type="text"
              />
              <button className={styles.heroSearchButton}>
                <span>Buscar</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </button>
            </div>
          </div>

          <div className={styles.trustMetrics}>
            <div className={styles.trustMetricItem}>
              <div className={styles.trustMetricIconWrapper} style={{ backgroundColor: 'rgba(0, 230, 118, 0.2)', color: 'var(--color-primary)' }}>
                <span className={`material-symbols-outlined ${styles.trustMetricIcon}`}>verified_user</span>
              </div>
              <div className={styles.trustMetricText}>
                <span className={styles.trustMetricTitle}>Custódia Total</span>
                <span className={styles.trustMetricSubtitle}>Fundos retidos até o aval</span>
              </div>
            </div>

            <div className={styles.trustMetricItem}>
              <div className={styles.trustMetricIconWrapper} style={{ backgroundColor: 'rgba(78, 222, 163, 0.2)', color: 'var(--color-secondary)' }}>
                <span className={`material-symbols-outlined ${styles.trustMetricIcon}`}>bolt</span>
              </div>
              <div className={styles.trustMetricText}>
                <span className={styles.trustMetricTitle}>Entrega Instantânea</span>
                <span className={styles.trustMetricSubtitle}>Chatbot 24/7 automatizado</span>
              </div>
            </div>

            <div className={styles.trustMetricItem}>
              <div className={styles.trustMetricIconWrapper} style={{ backgroundColor: 'rgba(130, 210, 255, 0.2)', color: 'var(--color-tertiary-fixed-dim)' }}>
                <span className={`material-symbols-outlined ${styles.trustMetricIcon}`}>stars</span>
              </div>
              <div className={styles.trustMetricText}>
                <span className={styles.trustMetricTitle}>+500k Ordens</span>
                <span className={styles.trustMetricSubtitle}>99.8% de avaliação positiva</span>
              </div>
            </div>

            <div className={styles.trustMetricItem}>
              <div className={styles.trustMetricIconWrapper} style={{ backgroundColor: 'rgba(98, 255, 150, 0.2)', color: 'var(--color-primary)' }}>
                <span className={`material-symbols-outlined ${styles.trustMetricIcon}`}>payments</span>
              </div>
              <div className={styles.trustMetricText}>
                <span className={styles.trustMetricTitle}>PIX Automático</span>
                <span className={styles.trustMetricSubtitle}>Saque sem taxas abusivas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS POPULARES */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Categorias Populares</h2>
            </div>
            <a className={styles.seeAllLink} href="#todas-categorias">
              <span>Ver todas as categorias</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
          </div>
          
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* ANÚNCIOS EM DESTAQUE */}
      <section className={styles.section} id="destaques">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h2 className={styles.sectionTitle}>Anúncios em Destaque</h2>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* VALORANT SHOWCASE */}
      <section className={styles.section} style={{ paddingTop: '0' }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader} style={{ borderBottom: '1px solid rgba(28, 43, 60, 0.6)', paddingBottom: '0.75rem' }}>
            <h2 className={styles.sectionTitle}>Valorant</h2>
            <a className={styles.seeAllLink} href="#valorant">
              <span>Ver todos em Valorant</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>

          <div className={styles.productsGrid}>
            {valorantProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
          <a className={styles.seeAllLinkMobile} href="#valorant">
            <span>Ver todos em Valorant</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </a>
        </div>
      </section>
      
      {/* MINECRAFT SHOWCASE */}
      <section className={styles.section} style={{ paddingTop: '0' }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader} style={{ borderBottom: '1px solid rgba(28, 43, 60, 0.6)', paddingBottom: '0.75rem' }}>
            <h2 className={styles.sectionTitle}>Minecraft</h2>
            <a className={styles.seeAllLink} href="#minecraft">
              <span>Ver todos em Minecraft</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>

          <div className={styles.productsGrid}>
            {minecraftProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
          <a className={styles.seeAllLinkMobile} href="#minecraft">
            <span>Ver todos em Minecraft</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ROBLOX SHOWCASE */}
      <section className={styles.section} style={{ paddingTop: '0' }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader} style={{ borderBottom: '1px solid rgba(28, 43, 60, 0.6)', paddingBottom: '0.75rem' }}>
            <h2 className={styles.sectionTitle}>Roblox</h2>
            <a className={styles.seeAllLink} href="#roblox">
              <span>Ver todos em Roblox</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>

          <div className={styles.productsGrid}>
            {robloxProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
          <a className={styles.seeAllLinkMobile} href="#roblox">
            <span>Ver todos em Roblox</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </a>
        </div>
      </section>

      {/* LEAGUE OF LEGENDS SHOWCASE */}
      <section className={styles.section} style={{ paddingTop: '0' }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader} style={{ borderBottom: '1px solid rgba(28, 43, 60, 0.6)', paddingBottom: '0.75rem' }}>
            <h2 className={styles.sectionTitle}>League of Legends</h2>
            <a className={styles.seeAllLink} href="#lol">
              <span>Ver todos em LoL</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>

          <div className={styles.productsGrid}>
            {leagueProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
          <a className={styles.seeAllLinkMobile} href="#lol">
            <span>Ver todos em LoL</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </a>
        </div>
      </section>

      {/* BANNER PROMO / VENDEDOR GGJALA */}
      <section className={styles.promoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.promoContainer}>
            <div className={styles.promoGlow1}></div>
            <div className={styles.promoGlow2}></div>
            
            <div className={styles.promoGrid}>
              <div className={styles.promoContent}>
             
                
                <h2 className={styles.promoTitle}>
                  Ganhe dinheiro vendendo seus itens digitais e contas na <span>ggJala</span>
                </h2>
                
                <p className={styles.promoDesc}>
                  A menor comissão do mercado nacional, painel automatizado com entrega via bot, liberação ultrarrápida no Pix e suporte técnico dedicado 24 horas por dia.
                </p>
                
                <div className={styles.promoActions}>
                  <a className={styles.promoButton} href="#">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>storefront</span>
                    <span>Começar a Vender Agora</span>
                  </a>
                
                </div>
              </div>
              
              <div className={styles.promoMetrics}>
                <div className={styles.promoMetricCard}>
                  <span className={`${styles.promoMetricValue} ${styles.promoMetricValuePrimary}`}>5.9%</span>
                  <span className={styles.promoMetricLabel}>Taxa básica</span>
                </div>
                <div className={styles.promoMetricCard}>
                  <span className={`${styles.promoMetricValue} ${styles.promoMetricValueSecondary}`}>15 min</span>
                  <span className={styles.promoMetricLabel}>Tempo médio de venda</span>
                </div>
                <div className={styles.promoMetricCard}>
                  <span className={`${styles.promoMetricValue} ${styles.promoMetricValuePrimary}`}>100%</span>
                  <span className={styles.promoMetricLabel}>Automatizado via API</span>
                </div>
                <div className={styles.promoMetricCard}>
                  <span className={`${styles.promoMetricValue} ${styles.promoMetricValueSecondary}`}>PIX</span>
                  <span className={styles.promoMetricLabel}>Saques instantâneos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SEGURANÇA / GARANTIA ESCROW */}
      <section className={styles.escrowSection} id="como-funciona">
        <div className={styles.sectionContainer}>
          <div className={styles.escrowHeader}>
            <h2 className={styles.escrowTitle}>
              Como funciona a Proteção Escrow ggJala?
            </h2>
            <p className={styles.escrowDesc}>
              Eliminamos 100% dos riscos de golpes em negociações digitais. O vendedor não recebe até que o comprador valide os dados de acesso.
            </p>
          </div>

          <div className={styles.escrowGrid}>
            {/* Step 1 */}
            <div className={styles.escrowCard}>
              <span className={`${styles.escrowStep} ${styles.escrowStepPrimary}`}>PASSO 01</span>
              <h3 className={styles.escrowCardTitle}>Depósito Seguro em Custódia</h3>
              <p className={styles.escrowCardDesc}>
                Você realiza o pagamento via PIX, Cartão ou Cripto. O valor fica congelado em uma conta caução protegida pelo sistema ggJala e o vendedor é notificado para entregar.
              </p>
              <div className={styles.escrowCardFooter}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span>
                <span>Dinheiro blindado contra fraudes</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.escrowCard}>
              <span className={`${styles.escrowStep} ${styles.escrowStepSecondary}`}>PASSO 02</span>
              <h3 className={styles.escrowCardTitle}>Chat Oficial & Auditoria</h3>
              <p className={styles.escrowCardDesc}>
                A entrega dos dados, códigos ou chaves ocorre dentro do chat gravado da plataforma. Nossa inteligência analisa o processo e nossa equipe de moderação fica de plantão 24/7.
              </p>
              <div className={styles.escrowCardFooter}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>policy</span>
                <span>Registro imutável da transação</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.escrowCard}>
              <span className={`${styles.escrowStep} ${styles.escrowStepTertiary}`}>PASSO 03</span>
              <h3 className={styles.escrowCardTitle}>Liberação Instantânea</h3>
              <p className={styles.escrowCardDesc}>
                Assim que você testar e confirmar a alteração do e-mail e credenciais, você clica em confirmar. O saldo é liberado instantaneamente ao vendedor sem intermediações demoradas.
              </p>
              <div className={styles.escrowCardFooter}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>price_check</span>
                <span>Reputação creditada na hora</span>
              </div>
            </div>
          </div>

          <div className={styles.escrowGuarantee}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className={`material-symbols-outlined ${styles.escrowGuaranteeIcon}`}>shield_with_heart</span>
              <div>
                <span className={styles.escrowGuaranteeTitle}>Garantia Incondicional ggJala</span>
                <span className={styles.escrowGuaranteeDesc}>
                  Se o vendedor não entregar o ativo como anunciado, seu dinheiro volta 100% para seu saldo em menos de 10 minutos.
                </span>
              </div>
            </div>
            <a className={styles.escrowGuaranteeBtn} href="#">
              Central de Ajuda & Disputas
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Marketplace;
