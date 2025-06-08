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
        title: 'Kaynar Taksi - Şırnak\'ın En Güvenilir Taksi Hizmeti',
        description: 'Şırnak\'ta 7/24 güvenilir taksi hizmeti. Şırnak merkez, Cizre, Silopi, İdil ve tüm ilçelerde hizmetinizdeyiz. 0536 497 37 73'
      }
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Hizmetlerimiz - Kaynar Taksi',
        description: 'Şehir içi, havalimanı transferi, VIP transfer, grup transferi ve özel taksi hizmetleri. 0536 497 37 73'
      }
    },
    {
      path: '/bolgeler',
      name: 'areas',
      component: () => import('../views/AreasView.vue'),
      meta: {
        title: 'Hizmet Bölgelerimiz - Kaynar Taksi',
        description: 'Şırnak merkez, Cizre, Silopi, İdil, Uludere, Beytüşşebap ve Güçlükonak\'ta taksi hizmeti. 0536 497 37 73'
      }
    },
    {
      path: '/bolgeler/:area',
      name: 'area-detail',
      component: () => import('../views/AreaDetailView.vue'),
      meta: {
        title: 'Bölge Hizmetleri - Kaynar Taksi',
        description: 'Şırnak\'ın tüm ilçelerinde güvenilir taksi hizmeti. 0536 497 37 73'
      }
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'İletişim - Kaynar Taksi',
        description: 'Kaynar Taksi ile iletişime geçin. 7/24 hizmetinizdeyiz. 0536 497 37 73'
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
