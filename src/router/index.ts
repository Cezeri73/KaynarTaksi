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
        title: 'Şırnak Merkez 7/24 Ekonomi Taksi | Hızlı ve Güvenilir Taksi Hizmeti',
        description: 'Şırnak Merkez\'de 7/24 hızlı, güvenilir ve ekonomik taksi hizmeti. Yeni Mahalle Dilan Sokak\'ta profesyonel taksi hizmeti. 0536 497 37 73 numaralı telefondan 7/24 ulaşabilirsiniz.',
        ogTitle: 'Şırnak Merkez 7/24 Ekonomi Taksi | Hızlı ve Güvenilir Taksi Hizmeti',
        ogDescription: 'Şırnak Merkez\'de 7/24 hızlı, güvenilir ve ekonomik taksi hizmeti. Yeni Mahalle Dilan Sokak\'ta profesyonel taksi hizmeti.',
        ogUrl: 'https://kaynartaksi.netlify.app',
        ogImage: 'https://kaynartaksi.netlify.app/og-image.jpg'
      }
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Şırnak Merkez Taksi Hizmetleri | 7/24 Ekonomi Taksi',
        description: 'Şırnak Merkez\'de 7/24 profesyonel taksi hizmeti. Şehir içi, havalimanı transferi ve özel grup transferi hizmetleri. 0536 497 37 73',
        ogTitle: 'Şırnak Merkez Taksi Hizmetleri | 7/24 Ekonomi Taksi',
        ogDescription: 'Şırnak Merkez\'de 7/24 profesyonel taksi hizmeti. Şehir içi, havalimanı transferi ve özel grup transferi hizmetleri.',
        ogUrl: 'https://kaynartaksi.netlify.app/hizmetler',
        ogImage: 'https://kaynartaksi.netlify.app/og-image.jpg'
      }
    },
    {
      path: '/bolgeler',
      name: 'areas',
      component: () => import('../views/AreasView.vue'),
      meta: {
        title: 'Şırnak Merkez\'de Hizmet Bölgelerimiz | 7/24 Ekonomi Taksi',
        description: 'Şırnak Merkez\'in tüm mahallelerinde 7/24 hızlı ve güvenilir taksi hizmeti. Yeni Mahalle Dilan Sokak\'taki merkezimizden tüm bölgelere anında ulaşım.',
        ogTitle: 'Şırnak Merkez\'de Hizmet Bölgelerimiz | 7/24 Ekonomi Taksi',
        ogDescription: 'Şırnak Merkez\'in tüm mahallelerinde 7/24 hızlı ve güvenilir taksi hizmeti. Yeni Mahalle Dilan Sokak\'taki merkezimizden tüm bölgelere anında ulaşım.',
        ogUrl: 'https://kaynartaksi.netlify.app/bolgeler',
        ogImage: 'https://kaynartaksi.netlify.app/og-image.jpg'
      }
    },
    {
      path: '/bolgeler/:area',
      name: 'area-detail',
      component: () => import('../views/AreaDetailView.vue'),
      meta: {
        title: "Şırnak Merkez 7/24 Ekonomi Taksi | Mahalle Mahalle Taksi Hizmeti | 0536 497 37 73",
        description: "Şırnak Merkez'in belirli mahallelerinde hızlı, güvenilir ve ekonomik taksi hizmeti. Bireysel veya grup transferleriniz için 7/24 hizmetinizdeyiz. Detaylı bilgi ve rezervasyon için: 0536 497 37 73."
      }
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Şırnak Merkez Taksi ile İletişim | 7/24 Ekonomi Taksi',
        description: '7/24 hizmetinizdeyiz. Şırnak Merkez\'de güvenilir ve ekonomik taksi hizmeti için hemen arayın: 0536 497 37 73',
        ogTitle: 'Şırnak Merkez Taksi ile İletişim | 7/24 Ekonomi Taksi',
        ogDescription: '7/24 hizmetinizdeyiz. Şırnak Merkez\'de güvenilir ve ekonomik taksi hizmeti için hemen arayın.',
        ogUrl: 'https://kaynartaksi.netlify.app/iletisim',
        ogImage: 'https://kaynartaksi.netlify.app/og-image.jpg'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Update meta tags
  document.title = to.meta.title as string
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', to.meta.description as string)
  
  // Update Open Graph tags
  const ogTags = {
    'og:title': to.meta.ogTitle,
    'og:description': to.meta.ogDescription,
    'og:url': to.meta.ogUrl,
    'og:image': to.meta.ogImage
  }
  
  Object.entries(ogTags).forEach(([property, content]) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`)
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('property', property)
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', content as string)
  })
  
  // Update canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', to.meta.ogUrl as string)
  
  next()
})

export default router
