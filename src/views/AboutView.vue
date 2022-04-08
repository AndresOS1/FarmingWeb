<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HeaderComponent />
    <FooterComponent />
    <CarruselComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
export default {
  
  name: 'AboutView',
  components: {
    HeaderComponent,
    FooterComponent,
    CarruselComponent
  }
}
</script>


