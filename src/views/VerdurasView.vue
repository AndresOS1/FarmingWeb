<template>
    <div class="relleno">
        <HeaderComponent />
        <CarruselComponent />
      
        <div class="d-flex justify-content-center align-items-center col-xl-12 titulo ">
          <h3>VERDURAS</h3>
        </div>
        
        <div class="contenido d-flex flex-wrap container-fluid">

        <div class="producto">
        <h4>Bulto de zanahoria</h4>
        <img class="imagen" src="../assets/zanahorias.jpg" />
       <div >
        <b-button variant="success">$ 30.000 </b-button>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaZanahoria">Detalles</router-link></b-button>
      </div>
      </div>
      
      

      
      <div class="producto">
        <h4>Bulto de Brocoli</h4>
        <img class="imagen" src="../assets/brocoli.jpg" />
       <div >
        <b-button variant="success">$ 20.000 </b-button>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaBrocoli">Detalles</router-link></b-button>
      </div>
      </div>

      <div class="producto">
        <h4>Bulto de sapallo</h4>
        <img class="imagen" src="../assets/sapallo.png" />
       <div>
        <b-button variant="success">$ 9.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de calabacin</h4>
        <img class="imagen" src="../assets/calabacin.jpg" />

        <div>
        <b-button variant="success">$ 15.000 </b-button>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
           </div>
       
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de cebolleta</h4>
        <img class="imagen" src="../assets/cebolla.png" />
        <div>
        <b-button variant="success">$ 45.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
   
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>
  
      <div class="producto">
        <h4>Bulto de cilantro</h4>
        <img class="imagen" src="../assets/cilantro.png" />
       <div>
        <b-button variant="success">$ 15.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de ajo</h4>
        <img class="imagen" src="../assets/ajo.png" />
      <div>
        <b-button variant="success">$ 25.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de berengenas</h4>
        <img class="imagen" src="../assets/berengena.png" />
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
        <h4>Bulto de tomate</h4>
        <img class="imagen" src="../assets/tomate.jpg" />
       <div>
        <b-button variant="success">$ 40.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
  
         <br>
     <b-button variant="success"><router-link class="sj" to="/vistaTomate">Detalles</router-link> </b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de limon</h4>
        <img class="imagen" src="../assets/lmon.jpg" />
       <div>
        <b-button variant="success">$ 20.000 </b-button>
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
  name: 'VerdurasView',
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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 3px solid rgb(218, 128, 12); 
  
}

.producto img {
  width: 310px;
}

.ph {
  border: 1px solid rgb(218, 128, 12);
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
}
.imagen{
  width: 100;
  height: 50%;
}
.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
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