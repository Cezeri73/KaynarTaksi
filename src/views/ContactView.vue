<template>
  <main class="contact">
    <section class="hero" aria-label="İletişim başlığı">
      <h1>Şırnak Merkez Taksi ile İletişim</h1>
      <p class="subtitle">7/24 hizmetinizdeyiz. Şırnak Merkez'de güvenilir ve ekonomik taksi hizmeti için hemen arayın.</p>
    </section>

    <section class="contact-grid" aria-label="İletişim bilgileri">
      <article class="contact-card">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <h2>Telefon</h2>
        <p>7/24 taksi çağırmak için hemen arayın</p>
        <a href="tel:+905364973773" class="contact-link" aria-label="0536 497 37 73 numaralı telefonu ara">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </article>

      <article class="contact-card">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <h2>Adres</h2>
        <p>Yeni Mahalle Dilan Sokak</p>
        <p>Şırnak Merkez, Şırnak</p>
        <a href="https://maps.google.com/?q=Yeni+Mahalle+Dilan+Sokak+Şırnak" class="contact-link" target="_blank" rel="noopener" aria-label="Google Maps'te adresi görüntüle">
          <font-awesome-icon :icon="['fas', 'map']" /> Haritada Göster
        </a>
      </article>

      <article class="contact-card">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
        <h2>WhatsApp</h2>
        <p>WhatsApp üzerinden taksi çağırmak için tıklayın</p>
        <a href="https://wa.me/905364973773" class="contact-link" target="_blank" rel="noopener" aria-label="WhatsApp'tan mesaj gönder">
          <font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp'tan Mesaj Gönder
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

<script setup lang="ts">
</script>

<style scoped>
.contact {
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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 40px;
}

.contact-card {
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

.contact-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px #FFD60055;
  border-color: #FFD600;
}

.contact-card svg {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #1A237E;
}

.contact-card h2 {
  color: #1A237E;
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.contact-card p {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1em;
  line-height: 1.6;
}

.contact-link {
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

.contact-link:hover {
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
  
  .contact-card {
    padding: 25px 15px;
  }
  
  .contact-card h2 {
    font-size: 1.3em;
  }
  
  .contact-card p {
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