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
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.info-card svg {
  font-size: 2.5em;
  color: #1a237e;
  margin-bottom: 20px;
}

.info-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.5em;
}

.info-card a {
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
}

.cta-section {
  text-align: center;
  padding: 60px 20px;
  background: #f5f5f5;
  border-radius: 10px;
}

.cta-button {
  display: inline-block;
  background-color: #1a237e;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.5em;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0d47a1;
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