<template>
  <div class="about-bg">
    <section class="about-section">
      <h1>Hakkımızda</h1>
      <p>
        <strong>Kaynar Taksi</strong>, Şırnak Merkez'de uzun yıllardır hizmet veren, müşteri memnuniyetini ve güvenliği ön planda tutan bir taksi durağıdır. Deneyimli şoförlerimiz ve bakımlı araçlarımız ile sizlere 7 gün 24 saat kesintisiz ulaşım hizmeti sunuyoruz.
      </p>
      <p>
        Amacımız, Şırnak ve çevresinde en hızlı, en güvenli ve en konforlu taksi deneyimini yaşatmak. Bizi tercih eden tüm müşterilerimize teşekkür ederiz.
      </p>
      <ul>
        <li>✔️ Güvenilir ve deneyimli şoförler</li>
        <li>✔️ 7/24 kesintisiz hizmet</li>
        <li>✔️ Temiz ve konforlu araçlar</li>
        <li>✔️ Hızlı ulaşım ve müşteri memnuniyeti</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about-bg {
  background: #fff;
    min-height: 100vh;
  padding-bottom: 2rem;
}
.about-section {
  background: #fff;
  margin: 0;
  width: 100vw;
  padding: 2.5rem 2rem;
  text-align: left;
  border-radius: 0;
  box-shadow: none;
}
.about-section h1 {
  color: #222;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  text-align: left;
}
.about-section p {
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}
.about-section ul {
  margin-top: 1.5rem;
  padding-left: 1.2rem;
}
.about-section li {
  color: #facc15;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
  list-style: none;
}
.about-section li::before {
  content: '•';
  color: #facc15;
  margin-right: 0.5rem;
}
@media (max-width: 700px) {
  .about-section {
    padding: 1.2rem 0.5rem;
    width: 100vw;
  }
  .about-section h1 {
    font-size: 1.3rem;
  }
}
</style>
