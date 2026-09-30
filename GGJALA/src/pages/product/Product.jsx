import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredProducts } from '../../mocks/marketplace';
import QuestionThread from '../../components/product/QuestionThread/QuestionThread';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Product.module.css';

const Product = () => {
  const { id } = useParams();
  
  // Find product in mocks or use default if not found
  const product = featuredProducts.find(p => p.id === parseInt(id)) || {
    id: parseInt(id) || 1,
    categoryTag: 'MINECRAFT',
    title: 'Conta de Minecraft Original Full Acesso [Capa Migrator + E-mail Próprio]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEMfC3N4sIQeHQtWjBNQdyM_nLgmIMm7UYB0ljgwIl06DZprnlJtWs6WTp59ODKgzG_lA4hyNtNZ4jvo9tROXj5y5YlegxignvcF1JjJXj9YP0Lq6HL68Izt9lKjNhdNUThEVgwCw12pq63OlSrzFtsrUyx3GeFyBgGMO2Yv93rrQgQL98C_6qwrLFCpa7rMLPbZKE3Ar-ewAp5hhU6CpjWEzjIeLD1MkrjEE_-2I02VfWgub1AKtrHubRgBzrsDe3NLc',
    price: 'R$ 75,00',
    priceLabel: 'Preço Especial',
    seller: {
      name: 'MineStoreVIP',
      initials: 'MS',
      rating: '4.9',
      reviews: '842'
    }
  };

  const mockQuestions = [
    {
      id: 1,
      userName: 'pedro_gamer',
      userAvatar: 'PG',
      time: 'há 2 horas',
      text: 'Opa amigo, a conta tem ban no Hypixel ou está totalmente limpa? Consigo usar no Lunar Client?',
      answer: {
        time: 'há 1 hora',
        text: 'Boa tarde Pedro! Totalmente limpa, nunca entrou no Hypixel nem em servidores de ranking. Funciona 100% liso no Lunar Client, Badlion e Vanilla!'
      }
    },
    {
      id: 2,
      userName: 'lucas_craft',
      userAvatar: 'LC',
      time: 'há 5 horas',
      text: 'Entrega automática mesmo se eu comprar agora de madrugada?',
      answer: {
        time: 'há 4 horas',
        text: 'Sim! O bot da ggJala envia as credenciais no chat instantâneo no mesmo segundo em que o Pix for aprovado, independente do horário.'
      }
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const VISIBLE_THUMBS = 3;
  const thumbsInnerRef = useRef(null);

  // Mock gallery — in production this would come from product data
  const galleryImages = [
    { src: product.image },
    { src: product.image },
    { src: product.image },
    { src: product.image },
    { src: product.image },
    { src: product.image },
  ];

  // Clone first+last VISIBLE_THUMBS for seamless infinite loop
  const loopedImages = [
    ...galleryImages.slice(-VISIBLE_THUMBS),
    ...galleryImages,
    ...galleryImages.slice(0, VISIBLE_THUMBS),
  ];
  const realLength = galleryImages.length;
  // thumbOffset starts at VISIBLE_THUMBS so looped array points to first real image
  const [thumbOffset, setThumbOffset] = useState(VISIBLE_THUMBS);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const disableTransition = () => {
    if (thumbsInnerRef.current) thumbsInnerRef.current.style.transition = 'none';
  };
  const enableTransition = () => {
    if (thumbsInnerRef.current) thumbsInnerRef.current.style.transition = '';
  };

  const nextThumbs = useCallback(() => {
    const newOffset = thumbOffset + 1;
    setThumbOffset(newOffset);
    const realIdx = (newOffset - VISIBLE_THUMBS + realLength) % realLength;
    setActiveThumb(realIdx);
    // Entering end clone zone — silently reset after animation
    if (newOffset >= VISIBLE_THUMBS + realLength) {
      setTimeout(() => {
        disableTransition();
        const resetOffset = VISIBLE_THUMBS;
        setThumbOffset(resetOffset);
        setActiveThumb(0);
        requestAnimationFrame(() => requestAnimationFrame(enableTransition));
      }, 310);
    }
  }, [thumbOffset, realLength]);

  const prevThumbs = useCallback(() => {
    const newOffset = thumbOffset - 1;
    setThumbOffset(newOffset);
    const realIdx = ((newOffset - VISIBLE_THUMBS) % realLength + realLength) % realLength;
    setActiveThumb(realIdx);
    // Entering start clone zone — silently reset after animation
    if (newOffset < VISIBLE_THUMBS) {
      setTimeout(() => {
        disableTransition();
        const resetOffset = newOffset + realLength;
        setThumbOffset(resetOffset);
        setActiveThumb(((resetOffset - VISIBLE_THUMBS) % realLength + realLength) % realLength);
        requestAnimationFrame(() => requestAnimationFrame(enableTransition));
      }, 310);
    }
  }, [thumbOffset, realLength]);

  // Slide: each thumb is (100/VISIBLE_THUMBS)% of the track width
  const thumbSlidePercent = thumbOffset * (100 / VISIBLE_THUMBS);

  return (
    <>
    <main className={styles.main}>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumbInner}>
          <nav className={styles.breadcrumbNav}>
            <Link to="/" className={styles.breadcrumbLink}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>home</span>
              Início
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{product.title}</span>
          </nav>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.grid}>
          {/* Main Left Column */}
          <div className={styles.mainCol}>
            
            {/* Top Info & Gallery Card */}
            <div className={`${styles.card} ${styles.cardRow}`}>
              <div className={styles.gallery}>
                <div className={styles.mainImageContainer} onClick={() => openLightbox(activeThumb)} style={{ cursor: 'zoom-in' }}>
                  <img src={galleryImages[activeThumb].src} alt={product.title} className={styles.mainImage} />
                  
                  <button className={styles.expandBtn} aria-label="Expandir imagem" onClick={(e) => { e.stopPropagation(); openLightbox(activeThumb); }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fullscreen</span>
                  </button>
                </div>
                <div className={styles.thumbsCarousel}>
                  <button className={styles.thumbArrow} onClick={prevThumbs} aria-label="Anterior">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_left</span>
                  </button>
                  <div className={styles.thumbsTrack}>
                    <div
                      ref={thumbsInnerRef}
                      className={styles.thumbsInner}
                      style={{ transform: `translateX(calc(-${thumbSlidePercent}% - ${thumbOffset * 0.5}rem))` }}
                    >
                      {loopedImages.map((img, i) => {
                        const realIdx = ((i - VISIBLE_THUMBS) % realLength + realLength) % realLength;
                        return (
                          <button
                            key={i}
                            className={`${styles.thumbBtn} ${activeThumb === realIdx ? styles.thumbBtnActive : ''}`}
                            onClick={() => setActiveThumb(realIdx)}
                          >
                            <img src={img.src} alt={`Thumb ${realIdx + 1}`} className={styles.thumbImg} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <button className={styles.thumbArrow} onClick={nextThumbs} aria-label="Próximo">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
                  </button>
                </div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className={styles.verifiedBadge}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>verified</span>
                      Verificado pela ggJala
                    </span>
                  </div>
                  <h1 className={styles.productTitle}>{product.title}</h1>
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <span>Disponível:</span>
                      <span className={styles.statValue}>12</span>
                    </div>
                    <span>|</span>
                    <div className={styles.statItem}>
                      <span>Vendidos:</span>
                      <span className={styles.statValuePrimary}>154</span>
                    </div>
                    <span>|</span>
                    <div className={styles.statItem} style={{ color: 'var(--color-primary)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>toll</span>
                    </div>
                  </div>
                </div>

                <div className={styles.priceBox}>
                  <div className={styles.priceHeader}>
                    <span className={styles.priceLabel}>{product.priceLabel || 'Preço Especial'}</span>
                    <div className={styles.priceValueRow}>
                      <span className={styles.priceCurrent}>{product.price}</span>
                      <span className={styles.priceOld}>R$ 119,90</span>
                      <span className={styles.discountBadge}>-37%</span>
                    </div>
                  </div>
                  <div className={styles.actionRow}>
                    <button className={styles.buyBtn}>
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>bolt</span>
                      COMPRAR AGORA
                    </button>
                    <button className={styles.cartBtn}>
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>add_shopping_cart</span>
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Características Técnicas */}
            <div className={styles.card}>
              <div className={styles.sectionHeader}>
                <span className={`material-symbols-outlined ${styles.sectionIcon}`}>tune</span>
                <h2 className={styles.sectionTitle}>Características Técnicas</h2>
              </div>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Tipo do Anúncio</span>
                  <span className={styles.specValue}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-primary)' }}>key</span>
                    Conta Full Acesso
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Procedência & Recuperação</span>
                  <span className={styles.specValue}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>verified_user</span>
                    Possui dados de recuperação
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Plataformas Suportadas</span>
                  <span className={styles.specValue}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>devices</span>
                    PC, Mac, Linux
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Método de Entrega</span>
                  <span className={`${styles.specValue} ${styles.specValuePrimary}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                    Entrega Automática 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Descrição do Anúncio */}
            <div className={`${styles.card} ${styles.descSection}`}>
              <div className={styles.descHeader}>
                <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
                  <span className={`material-symbols-outlined ${styles.sectionIcon}`}>description</span>
                  <h2 className={styles.sectionTitle}>Descrição do Anúncio</h2>
                </div>
                <div className={styles.descDate}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>calendar_today</span>
                  <span>Criado em: 22/09/2026 18:53</span>
                </div>
              </div>
              <div className={styles.descBody}>
                <div className={styles.descSubTitle}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>sports_esports</span>
                  CONTA MINECRAFT ORIGINAL À VENDA
                </div>
                <p style={{ color: 'var(--color-on-surface-variant)' }}>
                  Conta de Minecraft original Microsoft disponível para venda pronta para uso imediato! Você receberá acesso integral ao e-mail de criação sem intermediários terceiros.
                </p>
                <div className={styles.descList}>
                  <div className={styles.descListItem}>
                    <span><strong>Conta 100% Original e Permanente:</strong> Acesso vitalício aos executáveis oficiais Java Edition e Bedrock Edition no Launcher Mojang/Microsoft.</span>
                  </div>
                  <div className={styles.descListItem}>
                    <span><strong>Servidores 100% Limpos:</strong> Sem histórico de banimento em nenhum servidor renomado (Hypixel, Rede Sky, MushMC, CraftLandia, Lunar Network).</span>
                  </div>
                  <div className={styles.descListItem}>
                    <span><strong>Acesso Full &amp; Troca Total:</strong> Acompanha e-mail próprio. Você pode alterar nick, senha, e-mail vinculado e ativar verificação de duas etapas (2FA).</span>
                  </div>
                </div>
                <div className={styles.descWarning}>
                  <strong style={{ color: 'var(--color-on-surface)' }}>Instruções Importantes:</strong> Leia atentamente todas as informações antes de confirmar o pedido. Nunca forneça suas credenciais recebidas a terceiros em redes externas. Todas as transações são protegidas pelo protocolo de custódia oficial da ggJala.
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-error)', border: 'none', background: 'none', fontSize: '10px', fontWeight: 'bold' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>flag</span>
                  Denunciar este anúncio
                </button>
              </div>
            </div>
            
          </div>

          {/* Sidebar Right Column */}
          <div className={styles.sidebarCol}>
            {/* Vendedor */}
            <div className={styles.card}>
              <div className={styles.sellerHeader}>
                <h3 className={styles.sectionTitle} style={{ textTransform: 'none', fontSize: '16px' }}>Vendedor</h3>
                <span className={styles.sellerStatus}>
                  <span className={styles.statusDot}></span>
                  ONLINE
                </span>
              </div>
              <div className={styles.sellerProfile} style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <div className={styles.sellerAvatar}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADf6WDJL2UBwm_WEh3oV-Va9CZSm7bcqDWgT6weNMV82izdZu2oLpb5hSNmlOVcKEeQcHObutXDX5M4RGKwtCzYYlaj8QBMcR29kOJ1DBo-Z6JquRwW1EE8KSLXegwsZ8vF4AIyPdJRAte5n_Ix6aWG3fG1-dRPkauuN9NEmIP9qUR4rSGOakAlf_SL3hxbvz8gF_KSEQByrXD67eA_w71ohGv6KeripO_BHwmBZGuzOc7MNOV_QE0tQ" alt="Avatar" />
                  <div className={styles.sellerBadge}>
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>verified</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className={styles.sellerName}>
                    {product.seller.name}
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-tertiary)' }}>diamond</span>
                  </div>
                  <span className={styles.sellerLevel}>Vendedor Verificado Nível 5</span>
                </div>
              </div>
              <div className={styles.sellerStats}>
                <div className={styles.sellerStatItem}>
                  <span className={styles.sellerStatLabel}>Avaliações:</span>
                  <span className={styles.sellerStatValuePrimary}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span>
                    {product.seller.rating} ({product.seller.reviews})
                  </span>
                </div>
                <div className={styles.sellerStatItem}>
                  <span className={styles.sellerStatLabel}>Vendas Totais:</span>
                  <span className={styles.sellerStatValue}>1.420+ vendas</span>
                </div>
                <div className={styles.sellerStatItem}>
                  <span className={styles.sellerStatLabel}>Membro desde:</span>
                  <span className={styles.sellerStatValue}>14/03/2023</span>
                </div>
                <div className={styles.sellerStatItem}>
                  <span className={styles.sellerStatLabel}>Resposta média:</span>
                  <span className={styles.sellerStatValueSecondary}>~5 minutos</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <a href="#" className={styles.sellerStoreBtn}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>storefront</span>
                  Ver todos os anúncios deste vendedor
                </a>
              </div>
            </div>

            {/* Verificações do Vendedor */}
            <div className={styles.card}>
              <div className={styles.sectionHeader} style={{ paddingBottom: '0.5rem', marginBottom: 0 }}>
                <span className={`material-symbols-outlined ${styles.sectionIcon}`}>badge</span>
                <h3 className={styles.sectionTitle} style={{ textTransform: 'none', fontSize: '16px' }}>Verificações do Vendedor</h3>
              </div>
              <div className={styles.verifyList}>
                <div className={styles.verifyItem}>
                  <div className={styles.verifyLabel}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)' }}>mail</span>
                    E-mail
                  </div>
                  <div className={styles.verifyStatus}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                    Verificado
                  </div>
                </div>
                <div className={styles.verifyItem}>
                  <div className={styles.verifyLabel}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)' }}>phone_iphone</span>
                    Telefone
                  </div>
                  <div className={styles.verifyStatus}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                    Verificado
                  </div>
                </div>
                <div className={styles.verifyItemDoc}>
                  <div className={styles.verifyLabel}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)' }}>account_box</span>
                    Documentos (KYC)
                  </div>
                  <div className={styles.verifyStatus}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                    Verificado
                  </div>
                </div>
                <div className={styles.verifyItemDoc}>
                  <div className={styles.verifyLabel}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)' }}>home_pin</span>
                    Comprovante Endereço
                  </div>
                  <div className={styles.verifyStatus}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                    Verificado
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeHeader}>
                <div className={styles.guaranteeIconWrapper}>
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>verified_user</span>
                </div>
                <div>
                  <h3 className={styles.guaranteeTitle}>Entrega Garantida ggJala</h3>
                  <div className={styles.guaranteeSub}>Custódia Escrow 100% Protegida</div>
                </div>
              </div>
              <p className={styles.guaranteeText}>
                O valor da sua compra fica retido com segurança pela ggJala. O vendedor só recebe o pagamento após você validar o acesso à conta e confirmar a transferência dos dados com sucesso.
              </p>
              <div className={styles.guaranteeFooter}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock_reset</span>
                Garantia de 30 dias com devolução integral
              </div>
            </div>

          </div>
        </div>
        
        {/* Perguntas ao Vendedor */}
        <div className={styles.questionsSection}>
          <div className={styles.questionsHeader}>
            <div className={styles.questionsHeaderLeft}>
              <span className="material-symbols-outlined" style={{ fontSize: '22px', color: 'var(--color-primary)' }}>forum</span>
              <h2 className={styles.sectionTitle}>Perguntas ao Vendedor</h2>
              <span className={styles.questionsCount}>14</span>
            </div>
            <span className={styles.questionsSub}>Dúvidas respondidas publicamente</span>
          </div>
          
          <div className={styles.questionsInputBox}>
            <textarea 
              className={styles.questionsTextarea} 
              rows="3" 
              placeholder="Faça uma pergunta ao vendedor sobre este produto..."
            ></textarea>
            <div className={styles.questionsInputFooter}>
              <div></div>
              <button className={styles.questionsSubmit}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>send</span>
                Perguntar
              </button>
            </div>
          </div>
          
          <div className={styles.questionsList}>
            {mockQuestions.map(q => (
              <QuestionThread key={q.id} question={q} sellerName={product.seller.name} />
            ))}
          </div>
        </div>

      </div>
    </main>

    <Lightbox
      open={lightboxOpen}
      close={() => setLightboxOpen(false)}
      index={lightboxIndex}
      slides={galleryImages}
      styles={{
        container: { backgroundColor: 'rgba(1, 15, 31, 0.97)' },
        slide: { padding: '16px' },
      }}
      carousel={{ finite: false }}
    />
    </>
  );
};

export default Product;
