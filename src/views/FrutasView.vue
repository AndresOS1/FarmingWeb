<template>
    <div class="relleno">
        <HeaderComponent />
        <CarruselComponent />
      
        <div class="d-flex justify-content-center align-items-center col-xl-12 titulo ">
          <h3>FRUTAS</h3>
        </div>
        
        <div class="contenido d-flex flex-wrap container-fluid">
      <div class="producto">
        <h4>Bulto de Fresa</h4>
        <img class="imagen" src="../assets/fresas.jpg" />
      <div>
        <b-button variant="success">$ 65.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaFresa">Detalle</router-link> </b-button>
      </div>

      
      <div class="producto">
        <h4>Bulto de manzana verde</h4>
        <img class="imagen" src="../assets/manzana verde.jpg" />
       <div>
        <b-button variant="success">$ 35.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de manzana</h4>
        <img class="imagen" src="../assets/manzanaroja.png" />
       <div>
        <b-button variant="success">$ 35.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaManzana">Detalle</router-link> </b-button>
      </div>

      <div class="producto">
        <h4>Bulto de sandia</h4>
        <img class="imagen" src="../assets/sandia.jpg" />
        <div>
        <b-button variant="success">$ 50.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de naranja</h4>
        <img class="imagen" src="../assets/naranja.jpg" />
        <div>
        <b-button variant="success">$ 50.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
   
         <br>
     <b-button variant="success"><router-link class="sj" to="/vistaNaranja">Detalle </router-link> </b-button>
      </div>
  
      <div class="producto">
        <h4>Bulto de pera</h4>
        <img class="imagen" src="../assets/pera.jpg" />
       <div>
        <b-button variant="success">$ 40.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de limon</h4>
        <img class="imagen" src="../assets/lmon.jpg" />
      <div>
        <b-button variant="success">$ 22.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de arandano</h4>
        <img class="imagen" src="../assets/arandano.png" />
       <div>
        <b-button variant="success">$ 20.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>

         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de Cereza</h4>
        <img class="imagen" src="../assets/cereza.jpg" />
       <div>
        <b-button variant="success">$ 80.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
  
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de Mora</h4>
        <img class="imagen" src="../assets/mora.png" />
       <div>
        <b-button variant="success">$ 35.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>
  </div>
    <FooterComponent />

      </div>




 
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'

export default {
  name: 'FrutasView',
  components: {
    HeaderComponent,
    FooterComponent,
    CarruselComponent
  }
}

</script>

<style scoped>
 .contenido {
 
  justify-content: space-evenly;
  margin-top: 30px;
  
} 

.producto {
 
  /* margin: 15px solid rgb(218, 128, 12); */
  padding: 2px 30px;
  text-align: center;
  border: 1px solid rgb(47, 136, 39);
  padding: 20px;
  
  /* box-shadow: 0 8px 16px 0 rgba(199, 123, 9, 0.2); */
  /* background-color: rgb(82, 134, 78); */
}

.producto:hover {
  box-shadow: 0 8px 16px 0 rgba(26, 131, 61, 0.2);
  border: 3px solid rgb(218, 128, 12); 
  
}

.producto img {
  width: 300px;
}

.ph {
  border: 1px solid rgb(218, 128, 12);
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
}
.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
}
.imagen{
  width: 100;
  height: 50%;
}

/* .titulo{

  color: black;
  padding: 5px;
  background-color: rgb(73, 143, 64);
  border-radius: 15px;
  width: 200px;
  right: 200px;
 

} */
</style>