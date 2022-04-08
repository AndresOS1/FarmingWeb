<template>
  <div>
    <HeaderComponent />
    <CarruselComponent />
    <section class="d-flex flex-wrap justify-content-evenly padre">
      <section class="col-xl-4 col-md-6 col-12 align-items-center mision">
        <h4 class="titulo">MISION</h4>
        <p class="texto">
          Con nuestra página web buscamos abrir el comercio a los productos
          agrícolas que venden cientos de campesinos, bajo esto también buscamos
          la facilidad de compraventa de consumidores y productores para así
          ayudar a mejorar la calidad de vida de nuestros campesinos y sus
          familias, entonces así nuestros campesinos podrán vender la mayoría de
          sus productos a su mejor precio como igual nuestros consumidores
          tendrán más facilidad de acceder a los productos campesinos.
        </p>
        <img src="../assets/imgmision.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
      </section>
      <section class="col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../assets/imgvision.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">VISION</h4>
        <p class="texto">
          Lo que buscamos en un futuro es ser el apoyo a los campesinos
          que salen a vender sus productos a las plazas de mercado con lo cual
          poder publicar sus productos a través de nuestro aplicativo web, lo
          cual llegaremos a ser será una plaza de mercado totalmente virtual
          brindándole apoyo a los diferentes agricultores. También poder ayudar a nivel nacional a
          todos nuestros agricultores campesinos con nuestro aplicativo web y
          así ayudarles a vender todos sus productos y mejorar su calidad de
          vida. Ya que serán más las posibilidades de que lleguen sus productos
          a la mayoría de consumidores.
        </p>
      </section>
      <section class="col-xl-4 col-md-12 col-12 top">
        <h4 class="titulo">TOP DE CALIFICACIONES</h4>
        <section class="d-flex justify-content-evenly align-items-center tops">
          <p class="nomT">Julian Rodriguez</p>
          <img src="../assets/top1.png" alt="">
        </section>
        <section class="d-flex justify-content-evenly align-items-center tops">
          <p class="nomT">Luz Perez</p>
          <img src="../assets/top2.png" alt="">
        </section>
        <section class="d-flex justify-content-evenly align-items-center tops">
          <p class="nomT">Jorge Perez</p>
          <img src="../assets/top3.png" alt="">
        </section>
        <section class="d-flex justify-content-evenly align-items-center tops">
          <p class="nomT">Seferina Latorre</p>
          <img src="../assets/top4.png" alt="">
        </section>
        <section class="d-flex justify-content-evenly align-items-center tops">
          <p class="nomT">Maria Marin</p>
          <img src="../assets/top5.png" alt="">
        </section>
        <img src="../assets/imgtop.jpg" alt="" class="col-xl-8 col-md-5 col-11 imgtop">
      </section>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CarruselComponent from "@/components/CarruselComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "InformacionView",
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.padre {
  margin: 15px;
}
.mision {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.vision {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.top {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.titulo {
  color: aliceblue;
  padding: 5px;
  background-color: rgb(56, 165, 42);
  border-radius: 15px;
}
.texto {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tops {
  margin-top: 20px;
}
.nomT {
  margin-top: 10px;
  font-size: 25px;
}
.imgvision {
  margin-bottom: 30px;
}
.imgtop{
  margin-top: 30px;
}
</style>