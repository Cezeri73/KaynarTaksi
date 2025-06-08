<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <div class="logo">
          <router-link to="/">Kaynar Taksi</router-link>
        </div>
        <div class="nav-links">
          <router-link to="/">Ana Sayfa</router-link>
          <router-link to="/hizmetler">Hizmetlerimiz</router-link>
          <router-link to="/bolgeler">Hizmet Bölgeleri</router-link>
          <router-link to="/iletisim">İletişim</router-link>
        </div>
        <div class="phone">
          <a href="tel:+905364973773">
            <font-awesome-icon :icon="['fas', 'phone']" /> 0536 497 37 73
          </a>
        </div>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>Kaynar Taksi</h3>
          <p>Şırnak, Cizre ve tüm ilçelerde 7/24 güvenilir taksi hizmeti</p>
        </div>
        <div class="footer-section">
          <h3>İletişim</h3>
          <p><a href="tel:+905364973773">0536 497 37 73</a></p>
          <p>Hizmet Bölgeleri: Şırnak, Cizre, Silopi, İdil, Uludere, Beytüşşebap, Güçlükonak</p>
        </div>
        <div class="footer-section">
          <h3>Hızlı Erişim</h3>
          <router-link to="/">Ana Sayfa</router-link>
          <router-link to="/hizmetler">Hizmetlerimiz</router-link>
          <router-link to="/bolgeler">Hizmet Bölgeleri</router-link>
          <router-link to="/iletisim">İletişim</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Kaynar Taksi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.topbar {
  background: #222;
  color: #fff;
  font-size: 0.95rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0.4rem 0;
}
.topbar a {
  color: #ffe066;
  text-decoration: none;
}
.main-header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem 1.2rem 2rem;
  box-shadow: 0 2px 8px #0001;
}
.logo-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.logo-icon {
  font-size: 2.2rem;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
}
.main-nav {
  display: flex;
  gap: 2rem;
}
.main-nav a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}
.main-nav a.active,
.main-nav a:hover {
  color: #facc15;
}
.cta-header {
  background: #facc15;
  color: #222;
  font-weight: bold;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #0001;
  transition: background 0.2s;
}
.cta-header:hover {
  background: #fde047;
}
@media (max-width: 800px) {
  .main-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .main-nav {
    gap: 1rem;
  }
  .cta-header {
    margin-top: 0.5rem;
  }
}
@media (max-width: 600px) {
  .topbar {
    font-size: 0.85rem;
    gap: 0.7rem;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0;
  }
  .main-header {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.7rem 0.3rem;
  }
  .logo-icon {
    font-size: 1.3rem;
  }
  .logo-text {
    font-size: 1.1rem;
  }
  .main-nav {
    gap: 0.5rem;
    font-size: 0.98rem;
  }
  .cta-header {
    font-size: 0.98rem;
    padding: 0.5rem 1rem;
  }
}
.mobile-call-btn {
  display: none;
}
@media (max-width: 700px) {
  .mobile-call-btn {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: #facc15;
    color: #222;
    font-weight: bold;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    text-decoration: none;
    box-shadow: 0 -2px 12px #0002;
    border-radius: 0;
    letter-spacing: 0.5px;
    transition: background 0.2s;
  }
  .mobile-call-btn:active {
    background: #ffe066;
  }
}
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 12px #0001;
  border-radius: 0 0 18px 18px;
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  min-height: 68px;
}
.logo {
  flex: 1;
  display: flex;
  align-items: center;
}
.logo a {
  font-size: 2rem;
  font-weight: 900;
  color: #1A237E;
  text-decoration: none;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
}
.nav-links {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}
.nav-links a {
  color: #1A237E;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
  display: inline-block;
}
.nav-links a::after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  background: #FFD600;
  border-radius: 2px;
  transition: width 0.25s;
  margin: 0 auto;
}
.nav-links a.active::after,
.nav-links a:hover::after {
  width: 100%;
}
.nav-links a.active,
.nav-links a:hover {
  color: #FFD600;
}
.phone {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.phone a {
  background: #FFD600;
  color: #1A237E;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  border-radius: 24px;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #FFD60033;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.phone a:hover {
  background: #1A237E;
  color: #FFD600;
  transform: scale(1.05);
}
@media (max-width: 1100px) {
  .nav-links {
    gap: 1.2rem;
  }
}
@media (max-width: 900px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
    min-height: unset;
  }
  .logo {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  .nav-links {
    justify-content: center;
    gap: 1rem;
  }
  .logo a {
    font-size: 1.3rem;
  }
  .phone {
    justify-content: center;
    font-size: 0.98rem;
    padding: 0.5rem 1rem;
  }
}
</style>
