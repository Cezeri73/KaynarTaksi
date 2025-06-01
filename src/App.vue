<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <!-- Üst iletişim barı -->
    <div class="topbar">
      <span>📞 <a href="tel:05446573773">0544 657 37 73</a></span>
      <span>⏰ 7/24 Hizmet</span>
      <span>📍 Şırnak Merkez</span>
    </div>
    <!-- Menü ve logo -->
    <header class="main-header">
      <div class="logo-area">
        <span class="logo-icon">🚕</span>
        <span class="logo-text">Kaynar Taksi</span>
      </div>
      <nav class="main-nav">
        <RouterLink to="/" exact-active-class="active">Ana Sayfa</RouterLink>
        <RouterLink to="/about" exact-active-class="active">Hakkımızda</RouterLink>
        <RouterLink to="/contact" exact-active-class="active">İletişim</RouterLink>
      </nav>
      <a class="cta-header" href="tel:05446573773">TAKSİ ÇAĞIR</a>
    </header>
    <RouterView />
    <!-- Mobilde sabit Taksi Ara butonu -->
    <a href="tel:05446573773" class="mobile-call-btn">📞 Hemen Taksi Ara</a>
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
</style>
