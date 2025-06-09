<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <div class="logo">
          <router-link to="/">Kaynar Taksi</router-link>
        </div>
        <button class="hamburger" aria-label="Menüyü Aç/Kapat" @click="toggleMenu" :aria-expanded="menuOpen">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
        <div class="nav-links" :class="{ open: menuOpen }">
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
@media (max-width: 800px) {
  /* main-header, main-nav, cta-header kaldırıldı */
}
@media (max-width: 600px) {
  .topbar {
    font-size: 0.85rem;
    gap: 0.7rem;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0;
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
nav, .nav {
  width: 100%;
  position: relative;
  top: 0;
  z-index: 100;
  background: #fff !important;
  box-shadow: 0 2px 12px #0001;
  border-radius: 0 0 18px 18px;
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  gap: 0;
  margin-bottom: 0;
}
.logo, .nav .logo {
  flex: 0 0 auto;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.logo a, .nav .logo a {
  font-size: 2rem;
  font-weight: 900;
  color: #1A237E !important;
  text-decoration: none;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #1A237E;
  text-shadow: 0 1px 6px #fff, 0 0px 2px #1A237E44;
  cursor: pointer;
  margin-left: 1rem;
  z-index: 120;
  outline: 2px solid transparent;
  transition: color 0.2s, text-shadow 0.2s;
}
.hamburger:focus, .hamburger:hover {
  color: #FFD600;
  text-shadow: 0 1px 6px #1A237E, 0 0px 2px #FFD60044;
  outline: 2px solid #FFD600;
}
.nav-links {
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  gap: 2.5rem;
  min-width: 0;
  overflow: hidden;
}
.nav-links a {
  color: #1A237E !important;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
  display: inline-block;
  white-space: nowrap;
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
  color: #FFD600 !important;
}
.phone, .nav .phone {
  flex: 0 0 auto;
  min-width: 160px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.phone a, .nav .phone a {
  background: #FFD600;
  color: #1A237E !important;
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
.phone a:hover, .nav .phone a:hover {
  background: #1A237E;
  color: #FFD600 !important;
  transform: scale(1.05);
}
@media (max-width: 900px) {
  nav, .nav {
    flex-direction: row;
    padding: 0.8rem 1rem;
    justify-content: space-between;
    align-items: center;
    min-height: 68px;
  }
  .logo {
    order: 1;
    flex: 1 1 auto;
    text-align: left;
    min-width: unset;
  }
  .hamburger {
    display: block;
    order: 2;
    margin-left: auto;
    margin-right: 1rem;
  }
  .phone {
    order: 3;
    flex: 0 0 auto;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    min-width: unset;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 8px 32px #0002;
    border-radius: 0 0 18px 18px;
    padding: 1.2rem 0 1.2rem 0;
    gap: 1.5rem;
    align-items: center;
    z-index: 110;
    animation: fadeIn 0.2s;
  }
  .nav-links.open {
    display: flex;
  }
  .logo a, .nav .logo a {
    font-size: 1.5rem;
  }
  .phone a, .nav .phone a {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    min-width: unset;
  }
}
@media (min-width: 901px) {
  .nav-links {
    display: flex !important;
    flex-direction: row;
    position: static;
    background: none;
    box-shadow: none;
    padding: 0;
    gap: 2.5rem;
    align-items: center;
  }
  .hamburger {
    display: none !important;
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
footer {
  background: #1A237E;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 -2px 12px #0002;
  border-radius: 18px 18px 0 0;
  margin-top: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 0;
}

.footer-section {
  flex: 1 1 calc(33.33% - 20px);
  max-width: 400px;
  text-align: left !important;
  box-sizing: border-box;
}

.footer-section h3 {
  color: #FFD600;
  margin-bottom: 15px;
  font-size: 1.3em;
  font-weight: 700;
}

.footer-section p, .footer-section a {
  color: #f0f0f0;
  font-size: 0.95em;
  margin-bottom: 8px;
  line-height: 1.5;
  text-decoration: none;
  display: block;
  text-align: left !important;
}

.footer-section a:hover {
  text-decoration: underline;
  color: #FFD600;
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  text-align: center;
  color: #f0f0f0;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .footer-section {
    flex: 1 1 100%;
    max-width: 90%;
    min-width: unset;
    text-align: center !important;
  }
}
</style>
