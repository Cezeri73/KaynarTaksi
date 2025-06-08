<template>
  <div class="areas">
    <div class="hero">
      <h1>Hizmet Bölgelerimiz</h1>
      <p>Şırnak ve tüm ilçelerinde 7/24 taksi hizmeti</p>
    </div>

    <div class="areas-grid">
      <div class="area-card">
        <h3>Şırnak Merkez</h3>
        <p>Şırnak'ın merkezinde ve tüm mahallelerinde 7/24 taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>Cizre</h3>
        <p>Cizre'nin tüm bölgelerinde güvenilir taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>Silopi</h3>
        <p>Silopi'de 7/24 ekonomik ve güvenli taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>İdil</h3>
        <p>İdil'de konforlu ve hızlı taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>Uludere</h3>
        <p>Uludere'de güvenilir taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>Beytüşşebap</h3>
        <p>Beytüşşebap'ta 7/24 taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>

      <div class="area-card">
        <h3>Güçlükonak</h3>
        <p>Güçlükonak'ta ekonomik taksi hizmeti</p>
        <a href="tel:+905364973773" class="area-phone">
          <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
        </a>
      </div>
    </div>

    <div class="cta-section">
      <h2>En Yakın Taksiyi Çağırın</h2>
      <p>Bulunduğunuz bölgede hemen taksi hizmeti alın</p>
      <a href="tel:+905364973773" class="cta-button">
        <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
      </a>
    </div>
  </div>
</template>

<style scoped>
.areas {
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

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
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
  display: inline-block;
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
}

.area-phone svg {
  margin-right: 5px;
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
  
  .area-card {
    padding: 20px;
  }
}
</style> 