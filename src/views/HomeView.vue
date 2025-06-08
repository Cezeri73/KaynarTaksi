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

const areas = [
  { name: "sirnak", title: "Şırnak Merkez", desc: "Şırnak merkezde ve tüm mahallelerinde 7/24 taksi hizmeti." },
  { name: "cizre", title: "Cizre", desc: "Cizre ve çevresinde güvenilir taksi hizmeti." },
  { name: "silopi", title: "Silopi", desc: "Silopi'de ekonomik ve hızlı taksi hizmeti." },
  { name: "idil", title: "İdil", desc: "İdil'de konforlu ve güvenli taksi hizmeti." },
  { name: "uludere", title: "Uludere", desc: "Uludere'de 7/24 taksi hizmeti." },
  { name: "beytussebap", title: "Beytüşşebap", desc: "Beytüşşebap'ta güvenilir taksi hizmeti." },
  { name: "guclukonak", title: "Güçlükonak", desc: "Güçlükonak'ta ekonomik taksi hizmeti." },
]
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Şırnak Taksi | Kaynar Taksi 7/24 Güvenilir Hizmet</h1>
      <p class="subtitle">Şırnak, Cizre ve Tüm İlçelerde 7/24 Hızlı ve Güvenilir Taksi Hizmeti</p>
      <div class="phone-number">
        <a href="tel:+905364973773" class="call-button" aria-label="0536 497 37 73 numaralı telefonu ara">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>
    </div>

    <div class="service-areas">
      <h2>Hizmet Bölgelerimiz</h2>
      <div class="areas-grid">
        <div class="area-card" v-for="area in areas" :key="area.name">
          <h3>{{ area.title }}</h3>
          <p>{{ area.desc }}</p>
          <a :href="'tel:+905364973773'" class="area-phone" aria-label="Taksi çağır: 0536 497 37 73">
            <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
          </a>
        </div>
      </div>
    </div>

    <div class="features">
      <h2>Neden Kaynar Taksi?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'clock']" />
          <h3>7/24 Taksi Hizmeti</h3>
          <p>Günün her saati Şırnak ve ilçelerinde hızlı taksi çağırma.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'shield-alt']" />
          <h3>Güvenli Ulaşım</h3>
          <p>Deneyimli ve güvenilir sürücüler ile güvenli yolculuk.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'car']" />
          <h3>Konforlu Araçlar</h3>
          <p>Modern ve bakımlı araç filosu ile konforlu ulaşım.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'money-bill-wave']" />
          <h3>Uygun Fiyat</h3>
          <p>Şeffaf ve ekonomik fiyatlarla taksi hizmeti.</p>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>Hemen Taksi Çağırın</h2>
      <p>Şırnak, Cizre ve tüm ilçelerde hızlı ve güvenilir taksi için hemen arayın.</p>
      <a href="tel:+905364973773" class="cta-button" aria-label="0536 497 37 73 numaralı telefonu ara">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 12px 32px 12px;
  background: #F7F8FA;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', 'Open Sans', Arial, sans-serif;
}

.hero {
  text-align: center;
  padding: 48px 20px 40px 20px;
  background: linear-gradient(135deg, #FFD600 0%, #1A237E 100%);
  color: #1A237E;
  border-radius: 22px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px #FFD60022;
}

.hero h1 {
  font-size: 2.8em;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: -1px;
  color: #1A237E;
}

.subtitle {
  font-size: 1.3em;
  margin-bottom: 28px;
  color: #222;
}

.phone-number {
  margin-top: 30px;
}

.call-button {
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

.call-button:hover {
  background: #1A237E;
  color: #FFD600;
  border-color: #FFD600;
  transform: scale(1.05);
}

.service-areas {
  margin-bottom: 40px;
}

.service-areas h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1A237E;
  font-size: 2.1em;
  font-weight: 800;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 24px;
}

.area-card {
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
  min-height: 160px;
}

.area-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px #FFD60055;
  border-color: #FFD600;
}

.area-card h3 {
  color: #1A237E;
  margin-bottom: 10px;
  font-size: 1.35em;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.area-card p {
  color: #333;
  margin-bottom: 0;
  font-size: 1.08em;
  font-weight: 500;
}

.area-phone {
  margin-top: 18px;
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
.area-phone:hover {
  background: #FFD600;
  color: #1A237E;
  border-color: #FFD600;
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1A237E;
  font-size: 2em;
  font-weight: 800;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 2px 8px #FFD60011;
}

.feature-card svg {
  font-size: 2.5em;
  color: #FFD600;
  margin-bottom: 20px;
}

.cta-section {
  text-align: center;
  padding: 48px 20px;
  background: linear-gradient(135deg, #FFD600 0%, #1A237E 100%);
  border-radius: 18px;
  color: #1A237E;
  margin-top: 40px;
  box-shadow: 0 4px 24px #FFD60022;
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
  background: #1A237E;
  color: #FFD600;
  border-color: #FFD600;
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .areas-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2em;
  }
  .subtitle {
    font-size: 1.1em;
  }
  .call-button {
    font-size: 1.1em;
    padding: 12px 20px;
  }
  .areas-grid {
    grid-template-columns: 1fr;
  }
  .area-card {
    padding: 22px 10px 18px 10px;
    min-height: 120px;
  }
}
</style>
