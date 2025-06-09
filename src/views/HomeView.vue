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
  { 
    name: "sirnak", 
    title: "Şırnak Merkez", 
    desc: "Şırnak merkezde ve tüm mahallelerinde **7/24** taksi hizmeti. Güvenilir, hızlı, konforlu ve **ekonomik** ulaşım için Şırnak Merkez 7/24 Ekonomi Taksi'yi tercih edin. Yeni Mahalle Dilan Sokak'taki adresimizden kolayca ulaşılabiliriz.",
    neighborhoods: "Tüm mahallelerde hizmet veriyoruz: Yeni Mahalle, Şehit Ali Batmaz Caddesi çevresi ve diğer tüm semtler."
  },
]
</script>

<template>
  <main class="home">
    <section class="hero" aria-label="Ana başlık ve iletişim">
      <h1>Şırnak Merkez 7/24 Ekonomi Taksi | Hızlı, Güvenilir ve Ekonomik Taksi Hizmeti</h1>
      <p class="subtitle">Şırnak Merkez'de 7/24 Hızlı, Güvenilir ve Ekonomik Taksi Hizmeti. Yeni Mahalle Dilan Sokak'taki adresimizle bütçenize uygun, konforlu ve deneyimli sürücülerimizle ulaşım sağlıyoruz.</p>
      <div class="phone-number">
        <a href="tel:+905364973773" class="call-button" aria-label="0536 497 37 73 numaralı telefonu ara">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>
      <img src="/taxi-hero.jpg" alt="Şırnak Merkez Ekonomi Taksi Aracı" class="hero-image"/>
    </section>

    <section class="service-areas" aria-label="Hizmet bölgeleri">
      <h2>Şırnak Merkez'de Taksi Hizmeti</h2>
      <div class="areas-grid">
        <article class="area-card" v-for="area in areas" :key="area.name">
          <h3>{{ area.title }}</h3>
          <p>{{ area.desc }}</p>
          <p class="neighborhoods">{{ area.neighborhoods }}</p>
          <a :href="'tel:+905364973773'" class="area-phone" aria-label="Taksi çağır: 0536 497 37 73">
            <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
          </a>
        </article>
      </div>
    </section>

    <section class="features" aria-label="Hizmet özellikleri">
      <h2>Neden Şırnak Merkez 7/24 Ekonomi Taksi'yi Seçmelisiniz?</h2>
      <div class="features-grid">
        <article class="feature-card">
          <font-awesome-icon :icon="['fas', 'clock']" />
          <h3>7/24 Kesintisiz Taksi Hizmeti</h3>
          <p>Günün her saati Şırnak Merkez'de hızlı taksi çağırma imkanı. Gece yarısı da olsa, sabahın ilk ışıkları da, her zaman yanınızdayız. Acil durumlarda anında taksi.</p>
        </article>
        <article class="feature-card">
          <font-awesome-icon :icon="['fas', 'shield-alt']" />
          <h3>Güvenli ve Profesyonel Ulaşım</h3>
          <p>Deneyimli ve güvenilir sürücüler ile güvenli yolculuk. Tüm sürücülerimiz profesyonel eğitimli, bölgeyi iyi tanıyor ve trafik kurallarına titizlikle uyar.</p>
        </article>
        <article class="feature-card">
          <font-awesome-icon :icon="['fas', 'car']" />
          <h3>Konforlu ve Bakımlı Araçlar</h3>
          <p>Modern ve bakımlı araç filosu ile konforlu ulaşım. Tüm araçlarımız düzenli bakımlı, temiz ve klimalıdır. Keyifli bir yolculuk deneyimi sunar.</p>
        </article>
        <article class="feature-card">
          <font-awesome-icon :icon="['fas', 'money-bill-wave']" />
          <h3>Uygun ve Ekonomik Fiyatlandırma</h3>
          <p>Şeffaf ve ekonomik fiyatlarla taksi hizmeti. Mesafeye göre sabit ve adil ücretlendirme. Bütçenizi düşünen, gizli ücret olmayan taksi hizmeti sunuyoruz.</p>
        </article>
      </div>
    </section>

    <section class="cta-section" aria-label="Çağrı to action">
      <h2>Hemen Şırnak Merkez 7/24 Ekonomi Taksi Çağırın</h2>
      <p>Şırnak Merkez'de hızlı, güvenilir ve ekonomik taksi için hemen arayın. 7/24 hizmetinizdeyiz. Yeni Mahalle Dilan Sokak'taki ofisimizden size en yakın taksiyi yönlendirelim.</p>
      <a href="tel:+905364973773" class="cta-button" aria-label="0536 497 37 73 numaralı telefonu ara">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </section>

    <section class="faq" aria-label="Sık sorulan sorular">
      <h2>Sık Sorulan Sorular</h2>
      <div class="faq-grid">
        <article class="faq-item">
          <h3>Şırnak Merkez'de taksi nasıl çağırabilirim?</h3>
          <p>0536 497 37 73 numaralı telefonu arayarak veya WhatsApp üzerinden mesaj göndererek taksi çağırabilirsiniz. Konumunuzu paylaşmanız yeterli.</p>
        </article>
        <article class="faq-item">
          <h3>Taksi hizmeti hangi saatlerde mevcut?</h3>
          <p>7/24 kesintisiz taksi hizmeti sunuyoruz. Gece yarısı da olsa, sabahın ilk ışıkları da, her zaman hizmetinizdeyiz.</p>
        </article>
        <article class="faq-item">
          <h3>Ödeme yöntemleri nelerdir?</h3>
          <p>Nakit ve kredi kartı ile ödeme yapabilirsiniz. Tüm ödemeler şeffaf ve fiyat listesine göre yapılmaktadır.</p>
        </article>
      </div>
    </section>
  </main>
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
  color: #fff;
  border-radius: 22px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px #FFD60022;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 2.8em;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: -1px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.subtitle {
  font-size: 1.3em;
  margin-bottom: 28px;
  color: #f0f0f0;
  position: relative;
  z-index: 2;
}

.phone-number {
  margin-top: 30px;
  position: relative;
  z-index: 2;
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

.hero-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 18px;
  margin-top: 30px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  border: 4px solid #fff;
  object-fit: cover;
  position: relative;
  z-index: 1;
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

.feature-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px #FFD60055;
  border-color: #FFD600;
}

.feature-card svg {
  font-size: 2.5em;
  color: #1A237E;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #1A237E;
  margin-bottom: 10px;
  font-size: 1.25em;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.feature-card p {
  color: #333;
  margin-bottom: 0;
  font-size: 1.08em;
  font-weight: 500;
}

.cta-section {
  text-align: center;
  padding: 48px 20px;
  background: linear-gradient(135deg, #FFD600 0%, #1A237E 100%);
  border-radius: 18px;
  color: #fff;
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

.neighborhoods {
  font-size: 0.9em;
  color: #1A237E;
  margin-top: 8px;
  font-style: italic;
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
  .hero-image {
    margin-top: 20px;
  }
}

.faq {
  margin-top: 60px;
  padding: 40px 20px;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
}

.faq h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #1A237E;
  font-size: 2em;
  font-weight: 800;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: #F7F8FA;
  padding: 25px;
  border-radius: 16px;
  border: 1px solid #E0E0E0;
}

.faq-item h3 {
  color: #1A237E;
  font-size: 1.2em;
  margin-bottom: 15px;
  font-weight: 700;
}

.faq-item p {
  color: #333;
  line-height: 1.6;
  font-size: 1.05em;
}
</style>
