<template>
  <div class="contact">
    <div class="hero">
      <h1>İletişim</h1>
      <p>7/24 hizmetinizdeyiz</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <h3>Telefon</h3>
          <a href="tel:+905364973773">0536 497 37 73</a>
        </div>

        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'clock']" />
          <h3>Çalışma Saatleri</h3>
          <p>7/24 Hizmet</p>
        </div>

        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          <h3>Hizmet Bölgeleri</h3>
          <p>Şırnak, Cizre, Silopi, İdil, Uludere, Beytüşşebap, Güçlükonak</p>
        </div>
      </div>

      <div class="cta-section">
        <h2>Hemen Taksi Çağırın</h2>
        <p>En yakın taksiyi hemen yönlendirelim</p>
        <a href="tel:+905364973773" class="cta-button">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #1a237e, #0d47a1);
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.contact-content {
  display: grid;
  gap: 40px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.info-card {
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
  min-height: 120px;
}

.info-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px #FFD60055;
  border-color: #FFD600;
}

.info-card svg {
  font-size: 2.5em;
  color: #1a237e;
  margin-bottom: 20px;
}

.info-card h3 {
  color: #1A237E;
  margin-bottom: 10px;
  font-size: 1.25em;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.info-card p, .info-card a {
  color: #333;
  margin-bottom: 0;
  font-size: 1.08em;
  font-weight: 500;
}

.cta-section {
  text-align: center;
  padding: 48px 20px;
  background: #1A237E;
  border-radius: 18px;
  color: #000000;
  margin-top: 40px;
  box-shadow: 0 4px 24px #FFD60022;
}

.cta-section h2, .cta-section p {
  color: #fff;
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
  margin-top: 20px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  gap: 10px;
  border: 2px solid #FFD600;
}

.cta-button:hover {
  background: #fff;
  color: #1A237E;
  border-color: #FFD600;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2em;
  }
  
  .info-card {
    padding: 20px;
  }
}
</style> 