<template>
  <div class="contact-bg">
    <section class="contact-section">
      <h1>İletişim</h1>
      <div class="contact-info">
        <p><strong>Telefon:</strong> <a href="tel:05446573773">0544 657 37 73</a></p>
        <p><strong>Adres:</strong> Şırnak Merkez</p>
        <p><strong>Hizmet Bölgeleri:</strong> Şırnak Merkez ve çevresi</p>
        <p><strong>Çalışma Saatleri:</strong> 7 gün 24 saat</p>
      </div>
      <div class="contact-desc">
        <p>Her türlü ulaşım ihtiyacınız için bize dilediğiniz zaman ulaşabilirsiniz. Kaynar Taksi, Şırnak'ta güvenli ve hızlı ulaşımın adresi!</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-bg {
  background: #fff;
  min-height: 100vh;
  padding-bottom: 2rem;
}
.contact-section {
  background: #fff;
  margin: 0;
  width: 100vw;
  padding: 2.5rem 2rem;
  text-align: left;
  border-radius: 0;
  box-shadow: none;
}
.contact-section h1 {
  color: #222;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  text-align: left;
}
.contact-info p {
  color: #444;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
}
.contact-info a {
  color: #facc15;
  text-decoration: none;
  font-weight: bold;
}
.contact-desc {
  margin-top: 1.5rem;
  color: #555;
  font-size: 1.05rem;
  text-align: left;
}
@media (max-width: 700px) {
  .contact-section {
    padding: 1.2rem 0.5rem;
    width: 100vw;
  }
  .contact-section h1 {
    font-size: 1.2rem;
  }
}
</style> 