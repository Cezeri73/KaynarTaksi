import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Şırnak Taksi | Kaynar Taksi 7/24 Güvenilir Taksi Hizmeti",
        description: "Şırnak, Cizre ve tüm ilçelerde 7/24 hızlı ve güvenilir taksi hizmeti. Hemen arayın: 0536 497 37 73"
      }
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: "Şırnak Taksi Hizmetleri | 7/24 Hızlı ve Güvenilir Taksi",
        description: "Şırnak ve ilçelerinde şehir içi, havalimanı transferi, VIP ve grup taksi hizmetleri. 0536 497 37 73"
      }
    },
    {
      path: '/bolgeler',
      name: 'areas',
      component: () => import('../views/AreasView.vue'),
      meta: {
        title: "Şırnak Taksi Bölgeleri | Cizre, Silopi, İdil ve Tüm İlçeler",
        description: "Şırnak merkez, Cizre, Silopi, İdil, Uludere, Beytüşşebap, Güçlükonak ve tüm ilçelerde 7/24 taksi hizmeti. 0536 497 37 73"
      }
    },
    {
      path: '/bolgeler/:area',
      name: 'area-detail',
      component: () => import('../views/AreaDetailView.vue'),
      meta: {
        title: "Şırnak Taksi | İlçe Taksi Hizmetleri",
        description: "Şırnak'ın tüm ilçelerinde hızlı ve güvenilir taksi hizmeti. 0536 497 37 73"
      }
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: "Şırnak Taksi İletişim | 7/24 Taksi Çağır",
        description: "Kaynar Taksi ile iletişime geçin. 7/24 hızlı ve güvenilir taksi hizmeti için hemen arayın: 0536 497 37 73"
      }
    }
  ]
})

// Sayfa başlığını ve meta açıklamasını güncelle
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Kaynar Taksi'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || 'Şırnak\'ın en güvenilir taksi hizmeti. 7/24 hizmetinizdeyiz. 0536 497 37 73')
  }
  next()
})

export default router
