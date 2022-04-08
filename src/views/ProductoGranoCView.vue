<template>
  <div>
    <HeaderComponent />
    <CarruselComponent />
    <section class="d-flex flex-wrap justify-content-evenly padre">
      <section class="col-xl-4 col-md-6 col-12 align-items-center pr">
        <h4 class="tit">Café</h4>
        <img
          src="../assets/cafe.jpg"
          alt=""
          class="col-xl-10 col-md-11 col-11 img"
        />
      </section>
      <section class="col-xl-4 col-md-6 col-12 align-items-center des">
        <h4 class="tit">Descripción</h4>
        <p class="txt">
          El café es la bebida que se obtiene a partir de los granos 
          tostados y molidos de los frutos de la planta del Café,
          es altamente estimulante por su contenido de cafeína, una sustancia psicoactiva.
        </p>
      </section>
      <section class="col-xl-4 col-md-12 col-12 top">
        <h4 class="tit">Informacion del vendedor</h4>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">Nombre:</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">Jesus Ordoñez</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">Comercializador de Grano</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">direccion:</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">Rio Hondo</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">contacto</p>
        </section>
        <section class="d-flex justify-content-evenly align-items-center">
          <p class="datos">3205373218</p>
        </section>
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
.padre {
  margin: 15px;
}
.pr {
  font-family: "Franklin Gothic Medium";
  padding: 20px;
  text-align: center;
}
.des {
  font-family: "Franklin Gothic Medium";
  padding: 20px;
  text-align: center;
}
.top {
  font-family: "Franklin Gothic Medium";
  padding: 20px;
  text-align: center;
}
.tit {
  color: aliceblue;
  padding: 5px;
  background-color: rgb(56, 165, 42);
  border-radius: 15px;
}
.txt {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.datos {
  font-size: 25px;
}
.img{
    margin-top: 20px;
}
</style>