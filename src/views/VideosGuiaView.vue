<template>
  <div>
    <HeaderComponent />
    <CarruselComponent />
    <section class="contenedor">
        <h4>Videos Guia</h4>
    </section>
    <section class="d-flex flex-wrap justify-content-evenly padre">
      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LtqgEBtIxl4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nNjacByhjas"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lo_4KDhR-_E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CarruselComponent from "@/components/CarruselComponent.vue";
export default {
  name: "ProductoGuamaView",
  components: {
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
  },
};
</script>

<style scoped>
.padre{
    margin-top: 20px;
}

h4{
  color: aliceblue;
  padding: 5px;
  justify-content: center;
  background-color: rgb(56, 165, 42);
  border-radius: 15px;
  width: 300px;
}
.contenedor {
  display: flex;
  justify-content: center;
}
</style>