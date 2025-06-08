<template>
  <div class="area-detail">
    <h1>{{ areaTitle }}</h1>
    <p>{{ areaDescription }}</p>
    <router-link to="/bolgeler">← Tüm Bölgelere Dön</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const area = computed(() => route.params.area as string)

const areaTitle = computed(() => {
  switch (area.value) {
    case 'sirnak-merkez':
      return 'Şırnak Merkez Taksi Hizmeti'
    case 'cizre':
      return 'Cizre Taksi Hizmeti'
    case 'silopi':
      return 'Silopi Taksi Hizmeti'
    case 'idil':
      return 'İdil Taksi Hizmeti'
    case 'uludere':
      return 'Uludere Taksi Hizmeti'
    case 'beytussebap':
      return 'Beytüşşebap Taksi Hizmeti'
    case 'guclukonak':
      return 'Güçlükonak Taksi Hizmeti'
    default:
      return 'Bölge Taksi Hizmeti'
  }
})

const areaDescription = computed(() => `Kaynar Taksi olarak ${areaTitle.value} için 7/24 güvenilir ve hızlı ulaşım hizmeti sunuyoruz. Hemen arayın: 0536 497 37 73`)
</script>

<style scoped>
.area-detail {
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  text-align: center;
}
.area-detail h1 {
  margin-bottom: 16px;
  font-size: 2rem;
}
.area-detail p {
  margin-bottom: 24px;
  font-size: 1.1rem;
}
</style> 