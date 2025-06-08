<template>
  <div class="services">
    <div class="hero">
      <h1>Hizmetlerimiz</h1>
      <p>Kaynar Taksi olarak sunduğumuz profesyonel taksi hizmetleri</p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <font-awesome-icon :icon="['fas', 'city']" />
        <h3>Şehir İçi Taksi</h3>
        <p>Şırnak ve ilçelerinde güvenli ve konforlu şehir içi ulaşım hizmeti</p>
      </div>

      <div class="service-card">
        <font-awesome-icon :icon="['fas', 'plane']" />
        <h3>Havalimanı Transferi</h3>
        <p>Şırnak ve çevre illerdeki havalimanlarına güvenli transfer hizmeti</p>
      </div>

      <div class="service-card">
        <font-awesome-icon :icon="['fas', 'car']" />
        <h3>Özel Transfer</h3>
        <p>Özel günleriniz ve önemli randevularınız için VIP transfer hizmeti</p>
      </div>

      <div class="service-card">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Grup Transferi</h3>
        <p>Toplu seyahatler için özel araç ve sürücü hizmeti</p>
      </div>
    </div>

    <div class="cta-section">
      <h2>Hemen Taksi Çağırın</h2>
      <p>7/24 hizmetinizdeyiz</p>
      <a href="tel:+905364973773" class="cta-button">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </div>
  </div>
</template>

<style scoped>
.services {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.service-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card svg {
  font-size: 2.5em;
  color: #1a237e;
  margin-bottom: 20px;
}

.service-card h3 {
  margin-bottom: 15px;
  color: #333;
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
  
  .service-card {
    padding: 20px;
  }
}
</style> 