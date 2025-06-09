<template>
  <main class="services">
    <section class="hero" aria-label="Hizmetler başlığı">
      <h1>Şırnak Merkez Taksi Hizmetlerimiz</h1>
      <p class="subtitle">Şırnak Merkez'de 7/24 profesyonel taksi hizmeti. Güvenli, konforlu ve ekonomik ulaşım için doğru adres.</p>
    </section>

    <section class="services-grid" aria-label="Hizmet listesi">
      <article class="service-card">
        <font-awesome-icon :icon="['fas', 'car']" />
        <h2>Şehir İçi Taksi</h2>
        <p>Şırnak Merkez'in tüm mahallelerine hızlı ve güvenli ulaşım. Deneyimli sürücülerimiz ve bakımlı araçlarımızla konforlu yolculuk.</p>
        <ul>
          <li>7/24 kesintisiz hizmet</li>
          <li>Deneyimli sürücüler</li>
          <li>Bakımlı ve konforlu araçlar</li>
          <li>Ekonomik fiyatlar</li>
        </ul>
        <a href="tel:+905364973773" class="service-phone" aria-label="Taksi çağır: 0536 497 37 73">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </article>

      <article class="service-card">
        <font-awesome-icon :icon="['fas', 'plane']" />
        <h2>Havalimanı Transfer</h2>
        <p>Şırnak Havalimanı'na güvenli ve konforlu transfer hizmeti. Uçuş saatlerinize uygun, zamanında ulaşım garantisi.</p>
        <ul>
          <li>7/24 havalimanı transferi</li>
          <li>Uçuş saatlerine uygun servis</li>
          <li>Konforlu ve geniş araçlar</li>
          <li>Sabit transfer ücreti</li>
        </ul>
        <a href="tel:+905364973773" class="service-phone" aria-label="Transfer için ara: 0536 497 37 73">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </article>

      <article class="service-card">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h2>Özel Grup Transferi</h2>
        <p>Toplu taşıma ihtiyaçlarınız için özel grup transfer hizmeti. Şehir içi ve şehirler arası grup transferleri.</p>
        <ul>
          <li>7/24 grup transferi</li>
          <li>Özel fiyatlandırma</li>
          <li>Konforlu minibüsler</li>
          <li>Esnek saat seçenekleri</li>
        </ul>
        <a href="tel:+905364973773" class="service-phone" aria-label="Grup transferi için ara: 0536 497 37 73">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </article>
    </section>

    <section class="cta-section" aria-label="Çağrı to action">
      <h2>Hemen Taksi Çağırın</h2>
      <p>Şırnak Merkez'de güvenilir ve ekonomik taksi hizmeti için hemen arayın. 7/24 hizmetinizdeyiz.</p>
      <a href="tel:+905364973773" class="cta-button" aria-label="0536 497 37 73 numaralı telefonu ara">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </section>
  </main>
</template>

<style scoped>
.services {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 12px;
  background: #F7F8FA;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', 'Open Sans', Arial, sans-serif;
}

.hero {
  text-align: center;
  padding: 48px 20px 40px 20px;
  background: linear-gradient(135deg, #FFD600 0%, #1A237E 100%);
  color: #fff;
  border-radius: 22px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px #FFD60022;
}

.hero h1 {
  font-size: 2.8em;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: -1px;
  color: #fff;
}

.subtitle {
  font-size: 1.3em;
  margin-bottom: 28px;
  color: #f0f0f0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 40px;
}

.service-card {
  background: #FFF9E1;
  color: #1A237E;
  padding: 32px 22px 28px 22px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 4px 24px #FFD60033;
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s;
  border: 2px solid #FFE082;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px #FFD60055;
  border-color: #FFD600;
}

.service-card svg {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #1A237E;
}

.service-card h2 {
  color: #1A237E;
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.service-card p {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.1em;
  line-height: 1.6;
}

.service-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;
  width: 100%;
}

.service-card li {
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
  color: #333;
  font-size: 1.05em;
}

.service-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #1A237E;
  font-weight: bold;
}

.service-phone {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  color: #1A237E;
  font-weight: 700;
  font-size: 1.15em;
  gap: 7px;
  text-decoration: none;
  background: #FFD60022;
  padding: 7px 18px;
  border-radius: 22px;
  transition: background 0.2s, color 0.2s;
  border: 2px solid #FFD60000;
}

.service-phone:hover {
  background: #FFD600;
  color: #1A237E;
  border-color: #FFD600;
}

.cta-section {
  text-align: center;
  padding: 40px 20px;
  background: #1A237E;
  color: #fff;
  border-radius: 22px;
  margin-top: 40px;
}

.cta-section h2 {
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 15px;
}

.cta-section p {
  font-size: 1.2em;
  margin-bottom: 25px;
  color: #f0f0f0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  background-color: #FFD600;
  color: #1A237E;
  padding: 15px 32px;
  border-radius: 32px;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 700;
  box-shadow: 0 2px 12px #FFD60033;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  gap: 10px;
  border: 2px solid #FFD600;
}

.cta-button:hover {
  background: #1A237E;
  color: #FFD600;
  border-color: #FFD600;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2em;
  }
  
  .subtitle {
    font-size: 1.1em;
  }
  
  .service-card {
    padding: 25px 15px;
  }
  
  .service-card h2 {
    font-size: 1.3em;
  }
  
  .service-card p {
    font-size: 1em;
  }
  
  .cta-section h2 {
    font-size: 1.8em;
  }
  
  .cta-section p {
    font-size: 1.1em;
  }
  
  .cta-button {
    font-size: 1.2em;
    padding: 12px 25px;
  }
}
</style> 