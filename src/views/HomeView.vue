<script setup lang="ts">
import { ref } from 'vue'
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
  const phone = '905446573773'
  const text = `Merhaba, taksi çağırmak istiyorum.%0AAdresim/Konumum: ${pickup.value}%0AGideceğim yer: ${destination.value}`
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
}
</script>

<template>
  <div class="home-bg">
    <div class="container">
      <section class="whatsapp-form-section">
        <h3>Taksi Çağırmak Çok Kolay!</h3>
        <p class="form-desc">Adresinizi veya konumunuzu girin, isterseniz gideceğiniz yeri de ekleyin. WhatsApp'tan bize ulaşın, hemen taksi yönlendirelim!</p>
        <form class="whatsapp-form" @submit.prevent="sendWhatsApp">
          <div class="input-group">
            <input v-model="pickup" type="text" placeholder="Adresiniz veya Konumunuz" required />
            <button type="button" class="location-btn" @click="getLocation">Konumumu Kullan</button>
          </div>
          <input v-model="destination" type="text" placeholder="Gideceğiniz Yer (isteğe bağlı)" />
          <button type="submit">WhatsApp'tan Taksi Çağır</button>
        </form>
        <p v-if="locationError" class="location-error">Konum alınamadı: {{ locationError }}</p>
      </section>

      <section class="hero">
        <div class="hero-flex">
          <div class="hero-content">
            <h1>Kaynar Taksi</h1>
            <h2>Şırnak Merkez'de 7/24 Güvenilir Taksi Hizmeti</h2>
            <p>
              Kaynar Taksi olarak, Şırnak ve ilçeleri (Cizre, Silopi, Beytüşşebap, İdil, Uludere, Güçlükonak) ile çevresinde güvenli, konforlu ve hızlı ulaşım sunuyoruz. Şırnak'ta taksi veya araba arıyorsanız, 0544 657 37 73 numaralı hattımızdan 7 gün 24 saat bize ulaşabilirsiniz.
            </p>
            <a class="cta-btn" href="tel:05446573773">Hemen Taksi Çağır</a>
            <img class="hero-taxi-img single" src="@/assets/taksi.jpg" alt="Kaynar Taksi, Taksi Kaynar, Şırnak Kaynar Taksi" />
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <h3>Konfor ve Güvenlik</h3>
          <p>Bakımlı ve temiz araçlarımızla, deneyimli şoförlerimizle güvenli yolculuk.</p>
        </div>
        <div class="feature">
          <h3>7/24 Hizmet</h3>
          <p>Günün her saati, haftanın her günü ulaşım desteği.</p>
        </div>
        <div class="feature">
          <h3>Hızlı Ulaşım</h3>
          <p>En kısa sürede bulunduğunuz noktaya ulaşırız.</p>
        </div>
      </section>

      <section class="contact-short">
        <h3>Bize Ulaşın</h3>
        <p><strong>Telefon:</strong> <a href="tel:05446573773">0544 657 37 73</a></p>
        <p><strong>Hizmet Bölgeleri:</strong> Şırnak Merkez ve çevresi</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
.home-bg {
  background: #fff;
  min-height: 100vh;
  width: 100vw;
  padding-bottom: 2rem;
  overflow-x: hidden;
}
.container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 1.5rem;
}
.hero {
  background: linear-gradient(135deg, #fff 60%, #ffe066 100%);
  padding: 2.5rem 0;
  text-align: center;
  border-radius: 0;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px #0001;
  width: 100%;
}
.hero-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.hero-content h1 {
  font-size: 2.7rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 800;
}
.hero-content h2 {
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 600;
}
.hero-content p {
  color: #555;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
.cta-btn {
  display: inline-block;
  background: #ffe066;
  color: #222;
  padding: 0.85rem 2.2rem;
  border-radius: 2rem;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #0001;
  transition: background 0.2s;
  border: 2px solid #ffe066;
}
.cta-btn:hover {
  background: #fff;
  color: #facc15;
  border: 2px solid #facc15;
}
.hero-taxi-img {
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px #0002;
  object-fit: cover;
  display: block;
  margin: 1.5rem auto 0 auto;
}
.hero-taxi-img.single {
  max-width: 400px;
  width: 100%;
  margin: 1.5rem auto 0 auto;
}
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}
.feature {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0002;
  padding: 1.5rem;
  max-width: 340px;
  flex: 1 1 280px;
  min-width: 220px;
  text-align: left;
}
.feature h3 {
  color: #facc15;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
}
.feature p {
  color: #444;
  font-size: 1rem;
}
.contact-short {
  background: #facc15;
  border-radius: 1rem;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 2px 8px #0001;
}
.contact-short h3,
.contact-short p,
.contact-short a {
  color: #222 !important;
  font-weight: bold;
}
.whatsapp-form-section {
  background: #fff;
  margin: 2rem auto 0 auto;
  padding: 2rem 1rem 1.5rem 1rem;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px #0001;
  max-width: 500px;
  text-align: center;
}
.whatsapp-form-section h3 {
  color: #222;
  font-size: 1.25rem;
  margin-bottom: 1.2rem;
}
.whatsapp-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.whatsapp-form input {
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.7rem;
  font-size: 1.05rem;
}
.whatsapp-form button {
  background: #25d366;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #0001;
}
.whatsapp-form button:hover {
  background: #128c7e;
}
.input-group {
  display: flex;
  gap: 0.5rem;
}
.location-btn {
  background: #facc15;
  color: #222;
  font-weight: 500;
  border: none;
  border-radius: 0.7rem;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.location-btn:hover {
  background: #ffe066;
}
.location-error {
  color: #e53e3e;
  margin-top: 0.7rem;
  font-size: 0.98rem;
}
.form-desc {
  color: #444;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
}
.whatsapp-form input, .location-btn, .whatsapp-form button {
  font-size: 1.15rem;
  min-height: 48px;
}
@media (max-width: 1200px) {
  .hero-taxi-img {
    max-width: 200px;
  }
}
@media (max-width: 900px) {
  .hero-flex {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .hero-taxi-img {
    max-width: 95vw;
  }
}
@media (max-width: 600px) {
  .hero {
    padding: 1.2rem 0.1rem 1rem 0.1rem;
    margin-bottom: 1rem;
  }
  .container {
    padding: 0 0.3rem;
  }
  .feature {
    min-width: unset;
    max-width: 98vw;
    padding: 1rem;
    font-size: 0.98rem;
  }
  .contact-short {
    padding: 1rem 0.2rem;
    max-width: 98vw;
    background: #facc15;
  }
}
@media (max-width: 700px) {
  .whatsapp-form-section {
    max-width: 98vw;
    padding: 1.2rem 0.2rem 1rem 0.2rem;
  }
  .input-group {
    flex-direction: column;
    gap: 0.3rem;
  }
  .form-desc {
    font-size: 0.98rem;
  }
  .whatsapp-form input, .location-btn, .whatsapp-form button {
    font-size: 1.05rem;
    min-height: 44px;
  }
}
</style>
