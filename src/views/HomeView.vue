<script setup lang="ts">
import { ref } from '@vue/runtime-core'
const pickup = ref('')
const destination = ref('')
const locationError = ref('')
const getLocation = () => {
  locationError.value = ''
  if (!navigator.geolocation) {
    locationError.value = 'Tarayıcınız konum hizmetini desteklemiyor.'
    return
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      pickup.value = `https://maps.google.com/?q=${lat},${lng}`
    },
    (err) => {
      locationError.value = err.message || 'Konum alınamadı.'
    }
  )
}
const sendWhatsApp = () => {
  const phone = '905364973773'
  const text = `Merhaba, taksi çağırmak istiyorum.%0AAdresim/Konumum: ${pickup.value}%0AGideceğim yer: ${destination.value}`
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Kaynar Taksi</h1>
      <p class="subtitle">Şırnak, Cizre ve Tüm İlçelerde 7/24 Güvenilir Taksi Hizmeti</p>
      <div class="phone-number">
        <a href="tel:+905364973773" class="call-button">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>
    </div>

    <div class="service-areas">
      <h2>Hizmet Bölgelerimiz</h2>
      <div class="areas-grid">
        <div class="area-card">
          <h3>Şırnak Merkez</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>Cizre</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>Silopi</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>İdil</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>Uludere</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>Beytüşşebap</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
        <div class="area-card">
          <h3>Güçlükonak</h3>
          <p>7/24 Taksi Hizmeti</p>
        </div>
      </div>
    </div>

    <div class="features">
      <h2>Neden Bizi Tercih Etmelisiniz?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'clock']" />
          <h3>7/24 Hizmet</h3>
          <p>Günün her saati hizmetinizdeyiz</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'shield-alt']" />
          <h3>Güvenli Ulaşım</h3>
          <p>Deneyimli ve güvenilir sürücüler</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'car']" />
          <h3>Konforlu Araçlar</h3>
          <p>Modern ve bakımlı araç filosu</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'money-bill-wave']" />
          <h3>Uygun Fiyat</h3>
          <p>Rekabetçi ve şeffaf fiyatlandırma</p>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>Hemen Taksi Çağırın</h2>
      <p>Şırnak, Cizre ve tüm ilçelerde hizmetinizdeyiz</p>
      <a href="tel:+905364973773" class="cta-button">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
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
  font-size: 3em;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 30px;
}

.phone-number {
  margin-top: 30px;
}

.call-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.5em;
  transition: background-color 0.3s;
}

.call-button:hover {
  background-color: #45a049;
}

.service-areas {
  margin-bottom: 40px;
}

.service-areas h2 {
  text-align: center;
  margin-bottom: 30px;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.area-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
}

.area-card:hover {
  transform: translateY(-5px);
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  text-align: center;
  margin-bottom: 30px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.feature-card svg {
  font-size: 2.5em;
  color: #1a237e;
  margin-bottom: 20px;
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
  
  .subtitle {
    font-size: 1.2em;
  }
  
  .call-button {
    font-size: 1.2em;
    padding: 12px 24px;
  }
}
</style>
